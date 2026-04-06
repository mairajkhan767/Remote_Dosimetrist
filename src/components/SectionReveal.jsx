import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Cinematic scroll-reveal wrapper.
 *
 * Children marked with className "sr-item" animate individually with stagger.
 * If no sr-items, the whole container animates.
 *
 * Props:
 *  direction  — "up" | "down" | "left" | "right" | "scale"
 *  delay      — additional delay (seconds)
 *  stagger    — stagger between sr-items
 *  distance   — px travel for directional reveals
 *  parallax   — if true, adds a subtle parallax shift on scroll
 *  parallaxSpeed — multiplier for parallax (default 0.12)
 */
export default function SectionReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  stagger = 0.12,
  distance = 50,
  parallax = false,
  parallaxSpeed = 0.12,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".sr-item");
    const hasItems = targets.length > 0;

    const fromMap = {
      up:    { y: distance, opacity: 0 },
      down:  { y: -distance, opacity: 0 },
      left:  { x: -distance, opacity: 0 },
      right: { x: distance, opacity: 0 },
      scale: { scale: 0.9, opacity: 0 },
    };
    const toMap = {
      up:    { y: 0, opacity: 1 },
      down:  { y: 0, opacity: 1 },
      left:  { x: 0, opacity: 1 },
      right: { x: 0, opacity: 1 },
      scale: { scale: 1, opacity: 1 },
    };

    const from = fromMap[direction] || fromMap.up;
    const to   = toMap[direction]   || toMap.up;
    const animTargets = hasItems ? targets : el;

    /* Set initial state immediately so elements don't flash visible */
    gsap.set(animTargets, from);

    const triggers = [];

    /* Reveal animation */
    const revealTween = gsap.fromTo(animTargets, from, {
      ...to,
      duration: 1.1,
      delay,
      stagger: hasItems ? stagger : 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 92%",
        end: "bottom 15%",
        toggleActions: "play none none none",
        invalidateOnRefresh: true,
        onEnter: () => {
          /* Failsafe: ensure elements are visible if trigger fires */
        },
      },
    });

    if (revealTween.scrollTrigger) {
      triggers.push(revealTween.scrollTrigger);
    }

    /* Optional parallax: content drifts up slower than scroll */
    if (parallax) {
      const parallaxTween = gsap.to(el, {
        y: () => -ScrollTrigger.maxScroll(window) * parallaxSpeed * 0.01,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      if (parallaxTween.scrollTrigger) {
        triggers.push(parallaxTween.scrollTrigger);
      }
    }

    /* Refresh ScrollTrigger after layout settles — critical for mobile & route changes */
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(raf);
      triggers.forEach((t) => t.kill());
      /* Reset opacity so navigating back doesn't leave elements hidden */
      gsap.set(animTargets, { clearProps: "all" });
    };
  }, [direction, delay, stagger, distance, parallax, parallaxSpeed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-reveal wrapper.
 *
 * Children marked with className "sr-item" animate individually with stagger.
 * If no sr-items, the whole container animates.
 *
 * Props:
 *  direction  — "up" | "down" | "left" | "right" | "scale"
 *  delay      — additional delay (seconds)
 *  stagger    — stagger between sr-items
 *  distance   — px travel for directional reveals
 *  parallax   — if true, adds a subtle parallax shift on scroll (desktop only)
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
    const animTargets = hasItems ? Array.from(targets) : [el];

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

    // Apply hidden initial state
    gsap.set(animTargets, from);

    let played = false;

    const play = () => {
      if (played) return;
      played = true;
      gsap.to(animTargets, {
        ...to,
        duration: 1.1,
        delay,
        stagger: hasItems ? stagger : 0,
        ease: "power3.out",
      });
    };

    // Use IntersectionObserver — reliable on mobile, desktop, all browsers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            play();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08 }
    );

    observer.observe(el);

    // Failsafe: if the element is already in the viewport when this runs,
    // IntersectionObserver may not fire — so check manually after a tick
    const checkTimer = setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        play();
        observer.unobserve(el);
      }
    }, 100);

    // Parallax (desktop only — skip on touch devices to avoid mobile issues)
    let parallaxTrigger = null;
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (parallax && !isTouchDevice) {
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
      parallaxTrigger = parallaxTween.scrollTrigger;
    }

    return () => {
      observer.disconnect();
      clearTimeout(checkTimer);
      if (parallaxTrigger) parallaxTrigger.kill();
      gsap.set(animTargets, { clearProps: "all" });
    };
  }, [direction, delay, stagger, distance, parallax, parallaxSpeed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

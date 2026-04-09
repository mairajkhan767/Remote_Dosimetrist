'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function PageHero({ title, subtitle, breadcrumb }) {
  const heroRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 })

      tl.fromTo(
        '.inner-hero-orb',
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power2.out', stagger: 0.15 }
      )

      tl.fromTo(
        '.hero-title-line',
        { y: 100, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out' },
        0.3
      )

      tl.fromTo(
        '.hero-line',
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )

      tl.fromTo(
        '.hero-subtitle',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
        '-=0.5'
      )

      tl.fromTo(
        '.hero-breadcrumb',
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.4'
      )

      gsap.to(bgRef.current, {
        y: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.inner-hero-orb-1', {
        y: 60,
        x: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      gsap.to('.inner-hero-orb-2', {
        y: 40,
        x: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.inner-hero-content', {
        y: -40,
        opacity: 0.3,
        scale: 0.97,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="inner-hero" ref={heroRef}>
      <div className="inner-hero-bg" ref={bgRef}></div>
      <div className="inner-hero-grain"></div>
      <div className="inner-hero-orb inner-hero-orb-1"></div>
      <div className="inner-hero-orb inner-hero-orb-2"></div>
      <div className="inner-hero-orb inner-hero-orb-3"></div>

      <div className="inner-hero-content">
        <div className="overflow-hidden">
          <h1 className="hero-title-line">{title}</h1>
        </div>
        <div className="hero-line inner-hero-line" style={{ transformOrigin: 'center' }}></div>
        {subtitle && <p className="hero-subtitle inner-hero-subtitle">{subtitle}</p>}
        {breadcrumb && (
          <div className="hero-breadcrumb inner-hero-breadcrumb">
            <Link href="/">Home</Link>
            <span className="bc-sep">/</span>
            <span className="bc-current">{breadcrumb}</span>
          </div>
        )}
      </div>
    </div>
  )
}

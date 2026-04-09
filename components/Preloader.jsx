'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { usePreloader } from './PreloaderContext'

export default function Preloader() {
  const { alreadyShown, checked, markShown } = usePreloader()
  const videoRef = useRef(null)
  const logoImg = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (!checked || alreadyShown) return

    const tl = gsap.timeline({
      delay: 2,
      onComplete: () => {
        markShown()
        if (videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
        }
      },
    })

    tl.to(videoRef.current, {
      width: '4%',
      height: '10%',
      borderRadius: '50px 999px 999px 50px',
      duration: 2,
      ease: 'power4.inOut',
    })
      .to(
        videoRef.current,
        {
          transform: 'translateX(-150px)',
          duration: 1,
          ease: 'power3.out',
        },
        '+=1'
      )
      .to(
        logoImg.current,
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          ease: 'power3.out',
        },
        '+=0'
      )
      .to(logoImg.current, {
        transform: 'translateY(-400px)',
        duration: 1,
        ease: 'power3.out',
        opacity: 0,
      })
      .to(
        videoRef.current,
        {
          transform: 'translate(-150px,-400px)',
          duration: 1,
          ease: 'power3.out',
          opacity: 0,
        },
        '<'
      )
  }, [checked, alreadyShown])

  if (!checked || alreadyShown) return null

  return (
    <div
      ref={wrapperRef}
      className="z-[9999] absolute w-screen h-screen flex left-[0px] justify-center items-center"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="object-cover w-full h-full"
        poster="/assets/preloader-image.png"
      >
        <source src="/assets/preloader-video.mp4" type="video/mp4" />
      </video>
      <img
        src="/assets/logo.png"
        className="absolute w-[195.26px] h-[56.69px]"
        ref={logoImg}
        style={{ clipPath: 'inset(0% 100% 0% 0%)' }}
        alt=""
      />
    </div>
  )
}

'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const Popup = dynamic(() => import('./Popup'), {
  ssr: false,
  loading: () => null,
})

/**
 * Code-splits `Popup` and mounts it after the next paint so its JS and
 * `usePathname` work never run on the server and do not block the first paint.
 */
export default function DeferredPopup() {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    let cancelled = false
    const go = () => {
      if (!cancelled) setLoad(true)
    }

    let raf2 = 0
    const raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(go)
    })

    return () => {
      cancelled = true
      window.cancelAnimationFrame(raf1)
      if (raf2) window.cancelAnimationFrame(raf2)
    }
  }, [])

  if (!load) return null
  return <Popup />
}

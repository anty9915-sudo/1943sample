import { useEffect, useState } from 'react'
import './Loading.css'

const MIN_DURATION = 1200

function Loading() {
  const [hiding, setHiding] = useState(false)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    const hideTimer = setTimeout(() => setHiding(true), MIN_DURATION)
    return () => clearTimeout(hideTimer)
  }, [])

  useEffect(() => {
    if (!hiding) return undefined
    const unmountTimer = setTimeout(() => setMounted(false), 600)
    return () => clearTimeout(unmountTimer)
  }, [hiding])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', mounted)
    return () => document.body.classList.remove('no-scroll')
  }, [mounted])

  if (!mounted) return null

  return (
    <div className={`loading-screen ${hiding ? 'is-hidden' : ''}`} role="status" aria-live="polite">
      <div className="loading-logo">
        <span className="loading-year">1943</span>
        <span className="loading-classic">CLASSIC</span>
      </div>
      <p className="loading-text">LOADING...</p>
    </div>
  )
}

export default Loading

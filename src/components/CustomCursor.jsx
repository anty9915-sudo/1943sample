import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

const HOVER_SELECTOR = 'a, button, input, select, [data-cursor-hover]'

function CustomCursor() {
  const cursorRef = useRef(null)
  const [enabled, setEnabled] = useState(() => window.matchMedia('(pointer: fine)').matches)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(pointer: fine)')
    const onChange = (e) => setEnabled(e.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    function onMouseMove(e) {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    function onMouseOver(e) {
      setHovering(Boolean(e.target.closest(HOVER_SELECTOR)))
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
    }
  }, [enabled])

  if (!enabled) return null

  return <div ref={cursorRef} className={`custom-cursor ${hovering ? 'is-hover' : ''}`} aria-hidden="true" />
}

export default CustomCursor

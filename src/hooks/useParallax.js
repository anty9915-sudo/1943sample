import { useEffect, useRef, useState } from 'react'

export function useParallax(speed = 0.15) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const isTouch = window.matchMedia('(max-width: 768px)').matches
    if (isTouch) return undefined

    let frame = null

    function update() {
      const node = ref.current
      if (!node) return
      const rect = node.getBoundingClientRect()
      const center = rect.top + rect.height / 2 - window.innerHeight / 2
      setOffset(center * speed * -1)
    }

    function onScroll() {
      if (frame) return
      frame = requestAnimationFrame(() => {
        update()
        frame = null
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [speed])

  return [ref, offset]
}

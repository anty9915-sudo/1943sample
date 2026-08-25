import { useState } from 'react'

/**
 * src가 없거나 해당 경로에 파일이 없으면(404) 자동으로 placeholder 스타일로 대체된다.
 * public/images 아래에 실제 파일만 넣으면 별도 코드 수정 없이 바로 반영된다.
 */
function Media({ src, alt = '', label, className = '', imgProps, ref, ...rest }) {
  const [broken, setBroken] = useState(false)
  const showPlaceholder = !src || broken

  if (showPlaceholder) {
    return (
      <div ref={ref} className={`media placeholder-media ${className}`.trim()} {...rest}>
        <span>{label || alt || 'IMAGE'}</span>
      </div>
    )
  }

  return (
    <div ref={ref} className={`media ${className}`.trim()} {...rest}>
      <img src={src} alt={alt} onError={() => setBroken(true)} {...imgProps} />
    </div>
  )
}

export default Media

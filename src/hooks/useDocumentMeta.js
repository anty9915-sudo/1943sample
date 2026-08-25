import { useEffect } from 'react'

const SITE_TITLE = '1943CLASSIC'

export function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_TITLE}` : `${SITE_TITLE} | 젊음에 클래식을 더하다`

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }
  }, [title, description])
}

import { useScrollPosition } from '../hooks/useReveal'
import { useTranslation } from '../i18n/useTranslation'
import './TopButton.css'

function TopButton() {
  const visible = useScrollPosition(600)
  const { t } = useTranslation()

  return (
    <button
      type="button"
      className={`top-button ${visible ? 'is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t('common.scrollTop')}
    >
      ↑
    </button>
  )
}

export default TopButton

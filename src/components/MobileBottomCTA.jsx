import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n/useTranslation'
import './MobileBottomCTA.css'

function MobileBottomCTA() {
  const { t } = useTranslation()

  return (
    <div className="mobile-bottom-cta">
      <a href="tel:1811-8248" className="btn btn-outline">
        {t('common.callCta')}
      </a>
      <Link to="/franchise" className="btn btn-primary">
        {t('common.brandCta')}
      </Link>
    </div>
  )
}

export default MobileBottomCTA

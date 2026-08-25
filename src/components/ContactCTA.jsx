import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Media from './Media'
import { IMAGES } from '../constants/images'
import { useTranslation } from '../i18n/useTranslation'
import './ContactCTA.css'

function ContactCTA() {
  const { t } = useTranslation()

  return (
    <section className="contact-cta">
      <Media
        src={IMAGES.franchise.contactCta}
        alt=""
        label={t('contactCta.imageLabel')}
        className="contact-cta-bg"
        aria-hidden="true"
      />
      <div className="container contact-cta-inner">
        <Reveal as="h2" className="contact-cta-title">
          START YOUR
          <br />
          1943 CLASSIC
        </Reveal>
        <Reveal as="p" delay={1} className="contact-cta-desc">
          {t('contactCta.desc')}
        </Reveal>
        <Reveal as="div" delay={2} className="contact-cta-buttons">
          <Link to="/franchise" className="btn btn-primary">
            {t('common.brandCta')}
          </Link>
          <a href="tel:1811-8248" className="btn btn-outline">
            {t('common.callCta')}
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default ContactCTA

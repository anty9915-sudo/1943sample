import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import Media from '../../components/Media'
import ContactCTA from '../../components/ContactCTA'
import { FRANCHISE_PROCESS_STEPS, FRANCHISE_STRENGTHS } from '../../data/franchiseData'
import { FRANCHISE_COST_TYPES } from '../../data/franchiseCostData'
import { IMAGES } from '../../constants/images'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'
import { useTranslation } from '../../i18n/useTranslation'
import './Franchise.css'

function Franchise() {
  const { t, formatPrice } = useTranslation()
  useDocumentMeta('FRANCHISE', t('franchise.seoDesc'))

  return (
    <>
      <section className="page-hero franchise-hero">
        <Media src={IMAGES.franchise.hero} alt="" label="FRANCHISE" className="page-hero-bg" aria-hidden="true" />
        <div className="page-hero-overlay" aria-hidden="true" />
        <div className="page-hero-content">
          <p className="eyebrow">FRANCHISE</p>
          <h1>{t('franchise.heroTitle')}</h1>
          <p className="franchise-hero-sub">{t('franchise.heroSub')}</p>
          <div className="franchise-hero-buttons">
            <Link to="/franchise#contact" className="btn btn-primary">
              {t('common.brandCta')}
            </Link>
            <a href="#cost" className="btn btn-outline">
              {t('franchise.ctaCost')}
            </a>
          </div>
        </div>
      </section>

      <section className="section franchise-strength">
        <div className="container">
          <Reveal as="p" className="eyebrow center">
            BRAND STRENGTH
          </Reveal>
          <div className="strength-grid">
            {FRANCHISE_STRENGTHS.map((item, i) => (
              <Reveal as="article" key={item.num} delay={(i % 4) + 1} className="strength-card">
                <span className="strength-num">{item.num}</span>
                <h3>{t(`data.strengths.${item.key}.title`)}</h3>
                <p>{t(`data.strengths.${item.key}.desc`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section franchise-cost" id="cost">
        <div className="container">
          <Reveal as="p" className="eyebrow center">
            FRANCHISE COST
          </Reveal>
          <Reveal as="p" delay={1} className="franchise-cost-notice">
            {t('franchise.costNotice')}
          </Reveal>

          <div className="cost-grid">
            {FRANCHISE_COST_TYPES.map((type, i) => (
              <Reveal as="div" key={type.type} delay={(i % 2) + 1} className="cost-card">
                <div className="cost-card-head">
                  <h3>{type.type}</h3>
                  <p>{t(`data.costTypes.${type.typeKey}.subtitle`)}</p>
                </div>
                <ul className="cost-items">
                  {type.items.map((item) => (
                    <li key={item.key}>
                      <span>{t(`data.costItems.${item.key}`)}</span>
                      <strong>{formatPrice(Number(item.value).toLocaleString())}</strong>
                    </li>
                  ))}
                </ul>
                <div className="cost-total">
                  <span>{t('franchise.total')}</span>
                  <strong>{formatPrice(Number(type.total).toLocaleString())}</strong>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section franchise-process">
        <div className="container">
          <Reveal as="p" className="eyebrow center">
            FRANCHISE PROCESS
          </Reveal>
          <div className="process-timeline">
            {FRANCHISE_PROCESS_STEPS.map((step, i) => (
              <Reveal as="div" key={step.step} delay={(i % 4) + 1} className="process-step">
                <span className="process-num">{step.step}</span>
                <h3>{t(`data.process.${step.key}.title`)}</h3>
                <p>{t(`data.process.${step.key}.desc`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div id="contact">
        <ContactCTA />
      </div>
    </>
  )
}

export default Franchise

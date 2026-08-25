import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import Media from '../../components/Media'
import ContactCTA from '../../components/ContactCTA'
import { BRAND_CONCEPTS } from '../../data/franchiseData'
import { IMAGES } from '../../constants/images'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'
import { useTranslation } from '../../i18n/useTranslation'
import './Home.css'

function Home() {
  const { t } = useTranslation()
  useDocumentMeta('HOME', t('home.seoDesc'))

  return (
    <>
      <section className="hero">
        <Media
          src={IMAGES.home.hero}
          alt=""
          label={t('home.heroImageLabel')}
          className="hero-bg"
          aria-hidden="true"
        />
        <div className="hero-gradient" aria-hidden="true" />

        <div className="hero-content">
          <p className="hero-year">1943</p>
          <h1 className="hero-classic">CLASSIC</h1>
          <p className="hero-desc">{t('home.heroDesc')}</p>
          <div className="hero-buttons">
            <Link to="/brand" className="btn btn-outline">
              BRAND STORY
            </Link>
            <Link to="/franchise" className="btn btn-primary">
              {t('common.brandCta')}
            </Link>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <span>SCROLL</span>
          <i />
        </div>
      </section>

      <section className="section home-about">
        <div className="container home-about-inner">
          <Reveal as="p" className="eyebrow">
            ABOUT 1943CLASSIC
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title">
            {t('home.aboutTitle')}
          </Reveal>
          <Reveal as="p" delay={2} className="section-desc home-about-desc">
            {t('home.aboutDesc1')}
            <br />
            {t('home.aboutDesc2')}
          </Reveal>
        </div>
      </section>

      <section className="section home-concept">
        <div className="container">
          <Reveal as="p" className="eyebrow">
            BRAND CONCEPT
          </Reveal>
          <div className="home-concept-grid">
            {BRAND_CONCEPTS.map((concept, i) => {
              const title = t(`data.concepts.${concept.key}.title`)
              return (
                <Reveal as="article" key={concept.num} delay={(i % 4) + 1} className="concept-card">
                  <span className="concept-num">{concept.num}</span>
                  <Media src={concept.image} alt={title} className="concept-thumb" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{t(`data.concepts.${concept.key}.desc`)}</p>
                  <Link to="/brand" className="concept-more">
                    MORE →
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}

export default Home

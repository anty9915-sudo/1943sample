import Reveal from '../../components/Reveal'
import Media from '../../components/Media'
import { useParallax } from '../../hooks/useParallax'
import { BRAND_CONCEPTS } from '../../data/franchiseData'
import { IMAGES } from '../../constants/images'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'
import { useTranslation } from '../../i18n/useTranslation'
import './Brand.css'

function InteriorImage({ speed, src, label, className }) {
  const [ref, offset] = useParallax(speed)
  return (
    <Media
      ref={ref}
      src={src}
      alt=""
      label={label}
      className={`interior-img ${className || ''}`}
      style={{ transform: `translateY(${offset}px)` }}
      aria-hidden="true"
    />
  )
}

function Brand() {
  const { t } = useTranslation()
  useDocumentMeta('BRAND', t('brand.seoDesc'))

  return (
    <>
      <section className="page-hero">
        <Media src={IMAGES.brand.hero} alt="" label="BRAND" className="page-hero-bg" aria-hidden="true" />
        <div className="page-hero-overlay" aria-hidden="true" />
        <div className="page-hero-content">
          <p className="eyebrow">BRAND</p>
          <h1>1943CLASSIC</h1>
        </div>
      </section>

      <section className="section brand-story">
        <div className="container brand-story-inner">
          <Reveal as="div" className="brand-story-image">
            <Media src={IMAGES.brand.story} alt="" label={t('brand.storyImageLabel')} className="brand-story-media" />
          </Reveal>
          <Reveal delay={1} className="brand-story-text">
            <p className="eyebrow">BRAND STORY</p>
            <h2 className="section-title">{t('brand.storyTitle')}</h2>
            <p className="section-desc">
              {t('brand.storyDesc1')}
              <br />
              {t('brand.storyDesc2')}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section brand-philosophy">
        <div className="container">
          <Reveal as="p" className="eyebrow center">
            BRAND CONCEPT
          </Reveal>
          <div className="philosophy-grid">
            {BRAND_CONCEPTS.map((concept, i) => {
              const title = t(`data.concepts.${concept.key}.title`)
              return (
                <Reveal as="article" key={concept.num} delay={(i % 4) + 1} className="philosophy-card">
                  <span className="philosophy-num">CONCEPT {concept.num}</span>
                  <Media src={concept.image} alt={title} className="philosophy-thumb" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{t(`data.concepts.${concept.key}.desc`)}</p>
                  <span className="philosophy-more">MORE →</span>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section interior">
        <div className="container">
          <Reveal as="p" className="eyebrow">
            INTERIOR
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title">
            {t('brand.interiorTitle')}
          </Reveal>
          <Reveal as="p" delay={2} className="section-desc interior-desc">
            {t('brand.interiorDesc')}
          </Reveal>

          <div className="interior-grid">
            <InteriorImage
              speed={0.08}
              src={IMAGES.brand.interiorMain}
              label={t('brand.mainInterior')}
              className="interior-main"
            />
            <InteriorImage
              speed={0.16}
              src={IMAGES.brand.interiorSub1}
              label={t('brand.subInterior1')}
              className="interior-sub"
            />
            <InteriorImage
              speed={0.22}
              src={IMAGES.brand.interiorSub2}
              label={t('brand.subInterior2')}
              className="interior-sub"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Brand

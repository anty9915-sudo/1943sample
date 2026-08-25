import Reveal from '../../components/Reveal'
import Media from '../../components/Media'
import { VIDEO_LIST } from '../../data/videoData'
import { IMAGES } from '../../constants/images'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'
import { useTranslation } from '../../i18n/useTranslation'
import './Marketing.css'

function Marketing() {
  const { t } = useTranslation()
  useDocumentMeta('MARKETING', t('marketing.seoDesc'))

  return (
    <>
      <section className="page-hero">
        <Media src={IMAGES.marketing.hero} alt="" label="MARKETING" className="page-hero-bg" aria-hidden="true" />
        <div className="page-hero-overlay" aria-hidden="true" />
        <div className="page-hero-content">
          <p className="eyebrow">MARKETING</p>
          <h1>{t('marketing.heroTitle')}</h1>
        </div>
      </section>

      <section className="section marketing-section">
        <div className="container">
          <div className="video-grid">
            {VIDEO_LIST.map((video, i) => {
              const title = t(`data.videos.${video.key}`)
              return (
                <Reveal
                  as="a"
                  key={video.id}
                  delay={(i % 3) + 1}
                  className="video-card"
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="video-thumb">
                    <Media src={video.thumbnail} alt={title} label={title} className="video-thumb-bg" />
                    <span className="video-play" aria-hidden="true">
                      ▶
                    </span>
                  </div>
                  <p className="video-title">{title}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Marketing

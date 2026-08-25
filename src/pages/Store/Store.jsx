import { useMemo, useState } from 'react'
import Reveal from '../../components/Reveal'
import Media from '../../components/Media'
import { REGIONS, STORE_LIST } from '../../data/storeData'
import { IMAGES } from '../../constants/images'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'
import { useTranslation } from '../../i18n/useTranslation'
import './Store.css'

function Store() {
  const { t } = useTranslation()
  useDocumentMeta('STORE', t('store.seoDesc'))

  const [region, setRegion] = useState('all')
  const [keyword, setKeyword] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  const filtered = useMemo(() => {
    return STORE_LIST.filter((store) => {
      const matchesRegion = region === 'all' || store.region === region
      const matchesKeyword = store.name.toLowerCase().includes(keyword.trim().toLowerCase())
      return matchesRegion && matchesKeyword
    })
  }, [region, keyword])

  const selectedStore = filtered.find((store) => store.id === selectedId) || filtered[0]

  return (
    <>
      <section className="page-hero">
        <Media src={IMAGES.store.hero} alt="" label="STORE" className="page-hero-bg" aria-hidden="true" />
        <div className="page-hero-overlay" aria-hidden="true" />
        <div className="page-hero-content">
          <p className="eyebrow">STORE</p>
          <h1>{t('store.heroTitle')}</h1>
        </div>
      </section>

      <section className="section store-section">
        <div className="container">
          <form className="store-search" onSubmit={(e) => e.preventDefault()}>
            <select value={region} onChange={(e) => setRegion(e.target.value)} aria-label={t('store.regionAria')}>
              {REGIONS.map((r) => (
                <option key={r} value={r}>
                  {t(`store.regions.${r}`)}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder={t('store.searchPlaceholder')}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              aria-label={t('store.searchPlaceholder')}
            />
            <button type="submit" className="btn btn-primary">
              {t('store.searchBtn')}
            </button>
          </form>

          <div className="store-layout">
            <div className="store-list">
              {filtered.length === 0 ? (
                <p className="store-empty">{t('store.empty')}</p>
              ) : (
                <ul>
                  {filtered.map((store) => (
                    <Reveal
                      as="li"
                      key={store.id}
                      className={`store-item ${selectedStore?.id === store.id ? 'is-selected' : ''}`}
                    >
                      <div className="store-item-head">
                        <span className="store-region-tag">{t(`store.regions.${store.region}`)}</span>
                        <h3>{store.name}</h3>
                      </div>
                      <p>{store.address}</p>
                      <p>{store.phone}</p>
                      <p>{store.hours}</p>
                      <button type="button" className="store-detail-btn" onClick={() => setSelectedId(store.id)}>
                        {t('store.detail')}
                      </button>
                    </Reveal>
                  ))}
                </ul>
              )}
            </div>

            <Media
              src={IMAGES.store.map}
              alt=""
              label={selectedStore ? `${selectedStore.name} · ${t('store.map')}` : t('store.map')}
              className="store-map"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Store

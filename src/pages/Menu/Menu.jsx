import { useEffect, useMemo, useState } from 'react'
import Reveal from '../../components/Reveal'
import Media from '../../components/Media'
import { MENU_CATEGORIES, MENU_ITEMS } from '../../data/menuData'
import { IMAGES } from '../../constants/images'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'
import { useTranslation } from '../../i18n/useTranslation'
import './Menu.css'

function MenuModal({ item, onClose, t, formatPrice }) {
  useEffect(() => {
    document.body.classList.add('no-scroll')
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('no-scroll')
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  const name = t(`data.menuItems.${item.key}.name`)

  return (
    <div className="menu-modal-backdrop" onClick={onClose}>
      <div
        className="menu-modal"
        role="dialog"
        aria-modal="true"
        aria-label={name}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="menu-modal-close" onClick={onClose} aria-label={t('common.close')}>
          {t('common.close')}
        </button>
        <Media src={item.image} alt={name} label={name} className="menu-modal-image" />
        <div className="menu-modal-body">
          <p className="eyebrow">{item.category.toUpperCase()}</p>
          <h3>{name}</h3>
          <p className="menu-modal-desc">{t(`data.menuItems.${item.key}.desc`)}</p>
          <p className="menu-modal-price">{formatPrice(item.price)}</p>
        </div>
      </div>
    </div>
  )
}

function Menu() {
  const { t, formatPrice } = useTranslation()
  useDocumentMeta('MENU', t('menu.seoDesc'))

  const [category, setCategory] = useState('all')
  const [keyword, setKeyword] = useState('')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = category === 'all' || item.category === category
      const name = t(`data.menuItems.${item.key}.name`)
      const matchesKeyword = name.toLowerCase().includes(keyword.trim().toLowerCase())
      return matchesCategory && matchesKeyword
    })
  }, [category, keyword, t])

  return (
    <>
      <section className="page-hero">
        <Media src={IMAGES.menu.hero} alt="" label="MENU" className="page-hero-bg" aria-hidden="true" />
        <div className="page-hero-overlay" aria-hidden="true" />
        <div className="page-hero-content">
          <p className="eyebrow">MENU</p>
          <h1>1943 CLASSIC</h1>
        </div>
      </section>

      <section className="section menu-section">
        <div className="container">
          <div className="menu-toolbar">
            <div className="menu-categories" role="tablist" aria-label="Menu category">
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  role="tab"
                  aria-selected={category === cat.key}
                  className={category === cat.key ? 'is-active' : ''}
                  onClick={() => setCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="menu-search">
              <input
                type="text"
                placeholder={t('menu.searchPlaceholder')}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                aria-label={t('menu.searchPlaceholder')}
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="menu-empty">{t('menu.empty')}</p>
          ) : (
            <div className="menu-grid">
              {filtered.map((item, i) => {
                const name = t(`data.menuItems.${item.key}.name`)
                return (
                  <Reveal
                    as="button"
                    key={item.id}
                    delay={(i % 4) + 1}
                    className="menu-card"
                    onClick={() => setSelected(item)}
                  >
                    <Media src={item.image} alt={name} label={name} className="menu-card-image" />
                    <div className="menu-card-body">
                      <p className="menu-card-category">{item.category.toUpperCase()}</p>
                      <h3>{name}</h3>
                      <p className="menu-card-desc">{t(`data.menuItems.${item.key}.desc`)}</p>
                      <p className="menu-card-price">{formatPrice(item.price)}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {selected && <MenuModal item={selected} onClose={() => setSelected(null)} t={t} formatPrice={formatPrice} />}
    </>
  )
}

export default Menu

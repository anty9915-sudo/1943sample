import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useScrollPosition } from '../hooks/useReveal'
import { useTranslation } from '../i18n/useTranslation'
import { LANGUAGES } from '../i18n/languages'
import './Header.css'

const NAV_ITEMS = [
  { label: 'BRAND', to: '/brand' },
  { label: 'MENU', to: '/menu' },
  { label: 'STORE', to: '/store' },
  { label: 'MARKETING', to: '/marketing' },
  { label: 'FRANCHISE', to: '/franchise' },
]

function Header() {
  const scrolled = useScrollPosition(50)
  const { t, language, setLanguage } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const drawerRef = useRef(null)
  const location = useLocation()
  const [prevPathname, setPrevPathname] = useState(location.pathname)
  const currentLanguage = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0]

  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname)
    setMenuOpen(false)
  }

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen)
    return () => document.body.classList.remove('no-scroll')
  }, [menuOpen])

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setLangOpen(false)
      }
    }
    function onClickOutside(e) {
      if (drawerRef.current && !drawerRef.current.contains(e.target) && !e.target.closest('.header-hamburger')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner container">
        <Link to="/" className="header-logo" aria-label={t('header.logoAria')}>
          1943<span>CLASSIC</span>
        </Link>

        <nav className="header-nav" aria-label="Main">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={({ isActive }) => (isActive ? 'is-active' : '')}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="lang-select">
            <button
              type="button"
              className="lang-btn"
              onClick={() => setLangOpen((v) => !v)}
              aria-expanded={langOpen}
            >
              {currentLanguage.label}
            </button>
            {langOpen && (
              <ul className="lang-dropdown" role="listbox">
                {LANGUAGES.map((lang) => (
                  <li key={lang.code}>
                    <button
                      type="button"
                      aria-selected={lang.code === language}
                      className={lang.code === language ? 'is-active' : ''}
                      onClick={() => {
                        setLanguage(lang.code)
                        setLangOpen(false)
                      }}
                    >
                      {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link to="/franchise" className="btn btn-primary header-cta">
            {t('header.cta')}
          </Link>
          <button
            type="button"
            className={`header-hamburger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t('header.closeMenu') : t('header.openMenu')}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-drawer ${menuOpen ? 'is-open' : ''}`} ref={drawerRef}>
        <nav aria-label="Mobile">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={({ isActive }) => (isActive ? 'is-active' : '')}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-drawer-lang">
          <p className="eyebrow">{t('header.languageLabel')}</p>
          <ul>
            {LANGUAGES.map((lang) => (
              <li key={lang.code}>
                <button
                  type="button"
                  className={lang.code === language ? 'is-active' : ''}
                  onClick={() => setLanguage(lang.code)}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {menuOpen && <div className="mobile-backdrop" aria-hidden="true" />}
    </header>
  )
}

export default Header

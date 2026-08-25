import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n/useTranslation'
import './Footer.css'

const NAV_ITEMS = [
  { label: 'BRAND', to: '/brand' },
  { label: 'MENU', to: '/menu' },
  { label: 'STORE', to: '/store' },
  { label: 'MARKETING', to: '/marketing' },
  { label: 'FRANCHISE', to: '/franchise' },
]

const SNS_ITEMS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
]

const COMPANY_VALUES = {
  name: '(주)1943클래식',
  ceo: '홍길동',
  regNo: '000-00-00000',
  tel: '1811-8248',
  email: 'contact@1943classic.co.kr',
  address: '서울특별시 강남구 테헤란로 000',
}

function Footer() {
  const { t } = useTranslation()

  const companyInfo = [
    { label: t('footer.company.name'), value: COMPANY_VALUES.name },
    { label: t('footer.company.ceo'), value: COMPANY_VALUES.ceo },
    { label: t('footer.company.regNo'), value: COMPANY_VALUES.regNo },
    { label: t('footer.company.tel'), value: COMPANY_VALUES.tel },
    { label: t('footer.company.email'), value: COMPANY_VALUES.email },
    { label: t('footer.company.address'), value: COMPANY_VALUES.address },
  ]

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            1943<span>CLASSIC</span>
          </Link>
          <ul className="footer-sns">
            {SNS_ITEMS.map((sns) => (
              <li key={sns.label}>
                <a href={sns.href} target="_blank" rel="noreferrer">
                  {sns.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="footer-info">
          {companyInfo.map((info) => (
            <li key={info.label}>
              <span className="footer-info-label">{info.label}</span>
              {info.value}
            </li>
          ))}
        </ul>
      </div>

      <div className="container footer-bottom">
        <p>{t('footer.copyright')}</p>
        <ul className="footer-links">
          <li>
            <a href="#privacy">{t('footer.privacy')}</a>
          </li>
          <li>
            <a href="#terms">{t('footer.terms')}</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

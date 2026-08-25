export const MENU_CATEGORIES = [
  { key: 'all', label: 'ALL' },
  { key: 'signature', label: 'SIGNATURE' },
  { key: 'food', label: 'FOOD' },
  { key: 'side', label: 'SIDE' },
]

// name/description은 src/i18n/dictionaries/*.js 의 data.menuItems.<key> 에서 언어별로 관리합니다.
// image 경로의 파일을 public/images/menu/ 에 넣으면 자동으로 반영됩니다. (없으면 placeholder로 표시)
export const MENU_ITEMS = [
  {
    id: 1,
    key: 'goldHighball',
    category: 'signature',
    price: '13,000',
    image: '/images/menu/gold-highball.jpg',
  },
  {
    id: 2,
    key: 'smokeSour',
    category: 'signature',
    price: '14,000',
    image: '/images/menu/smoke-sour.jpg',
  },
  {
    id: 3,
    key: 'oldFashioned',
    category: 'signature',
    price: '15,000',
    image: '/images/menu/old-fashioned.jpg',
  },
  {
    id: 4,
    key: 'truffleRisotto',
    category: 'food',
    price: '24,000',
    image: '/images/menu/truffle-risotto.jpg',
  },
  {
    id: 5,
    key: 'agedSteak',
    category: 'food',
    price: '32,000',
    image: '/images/menu/aged-steak.jpg',
  },
  {
    id: 6,
    key: 'truffleFries',
    category: 'side',
    price: '12,000',
    image: '/images/menu/truffle-fries.jpg',
  },
  {
    id: 7,
    key: 'cheesePlatter',
    category: 'side',
    price: '26,000',
    image: '/images/menu/cheese-platter.jpg',
  },
  {
    id: 8,
    key: 'goldMacaron',
    category: 'side',
    price: '10,000',
    image: '/images/menu/gold-macaron.jpg',
  },
]

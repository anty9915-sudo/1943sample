// 실제 이미지를 public/images 아래 정해진 경로에 넣으면 자동으로 반영됩니다.
// 파일이 아직 없으면 자동으로 placeholder 스타일로 대체되어 깨지지 않습니다.
// 권장 비율: HERO 16:9~21:9, CARD 4:3, SQUARE 1:1 / 형식: jpg, png, webp 모두 가능(확장자 포함해서 정확히 기재)

export const IMAGES = {
  home: {
    hero: '/images/home/hero.jpg',
  },
  brand: {
    hero: '/images/brand/hero.jpg',
    story: '/images/brand/story.jpg',
    interiorMain: '/images/brand/interior-main.jpg',
    interiorSub1: '/images/brand/interior-sub-01.jpg',
    interiorSub2: '/images/brand/interior-sub-02.jpg',
  },
  menu: {
    hero: '/images/menu/hero.jpg',
  },
  store: {
    hero: '/images/store/hero.jpg',
    map: '/images/store/map.jpg',
  },
  marketing: {
    hero: '/images/marketing/hero.jpg',
  },
  franchise: {
    hero: '/images/franchise/hero.jpg',
    contactCta: '/images/franchise/contact-cta.jpg',
  },
}

// title/desc는 src/i18n/dictionaries/*.js 의 data.process / data.strengths / data.concepts 에서 언어별로 관리합니다.
export const FRANCHISE_PROCESS_STEPS = [
  { step: '01', key: 'step1' },
  { step: '02', key: 'step2' },
  { step: '03', key: 'step3' },
  { step: '04', key: 'step4' },
  { step: '05', key: 'step5' },
  { step: '06', key: 'step6' },
]

export const FRANCHISE_STRENGTHS = [
  { num: '01', key: 'strength1' },
  { num: '02', key: 'strength2' },
  { num: '03', key: 'strength3' },
  { num: '04', key: 'strength4' },
]

// image 경로의 파일을 public/images/brand/ 에 넣으면 자동으로 반영됩니다. (없으면 placeholder로 표시)
export const BRAND_CONCEPTS = [
  { num: '01', key: 'concept1', image: '/images/brand/concept-01.jpg' },
  { num: '02', key: 'concept2', image: '/images/brand/concept-02.jpg' },
  { num: '03', key: 'concept3', image: '/images/brand/concept-03.jpg' },
  { num: '04', key: 'concept4', image: '/images/brand/concept-04.jpg' },
]

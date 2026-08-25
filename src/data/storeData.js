// 지역명은 src/i18n/dictionaries/*.js 의 store.regions.<key> 에서 언어별로 관리합니다.
// 매장명/주소/전화번호/영업시간은 실제 사업장 정보이므로 언어와 무관하게 한국어 표기를 유지합니다.
export const REGIONS = [
  'all',
  'seoul',
  'gyeonggi',
  'incheon',
  'busan',
  'daegu',
  'daejeon',
  'gwangju',
  'gangwon',
  'chungcheong',
  'jeolla',
  'gyeongsang',
]

export const STORE_LIST = [
  {
    id: 1,
    name: '1943CLASSIC 강남점',
    region: 'seoul',
    address: '서울특별시 강남구 테헤란로 123',
    phone: '02-000-0001',
    hours: '17:00 - 02:00',
  },
  {
    id: 2,
    name: '1943CLASSIC 홍대점',
    region: 'seoul',
    address: '서울특별시 마포구 와우산로 45',
    phone: '02-000-0002',
    hours: '17:00 - 03:00',
  },
  {
    id: 3,
    name: '1943CLASSIC 분당점',
    region: 'gyeonggi',
    address: '경기도 성남시 분당구 정자로 88',
    phone: '031-000-0003',
    hours: '17:00 - 01:00',
  },
  {
    id: 4,
    name: '1943CLASSIC 인천송도점',
    region: 'incheon',
    address: '인천광역시 연수구 송도과학로 12',
    phone: '032-000-0004',
    hours: '17:00 - 01:00',
  },
  {
    id: 5,
    name: '1943CLASSIC 해운대점',
    region: 'busan',
    address: '부산광역시 해운대구 마린시티2로 33',
    phone: '051-000-0005',
    hours: '17:00 - 02:00',
  },
  {
    id: 6,
    name: '1943CLASSIC 동성로점',
    region: 'daegu',
    address: '대구광역시 중구 동성로 21',
    phone: '053-000-0006',
    hours: '17:00 - 01:00',
  },
]

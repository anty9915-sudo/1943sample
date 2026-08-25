// label/subtitle/notice는 src/i18n/dictionaries/*.js 의 data.costItems, data.costTypes, franchise.costNotice 에서 언어별로 관리합니다.
// 실제 공식 창업 비용이 확정되면 아래 값을 교체하세요.
// 현재 값은 구조를 보여주기 위한 placeholder이며 확정된 금액이 아닙니다.
export const FRANCHISE_COST_TYPES = [
  {
    type: 'A TYPE',
    typeKey: 'typeA',
    items: [
      { key: 'franchiseFee', value: 10000000 },
      { key: 'trainingFee', value: 3000000 },
      { key: 'deposit', value: 10000000 },
      { key: 'interior', value: 60000000 },
      { key: 'kitchenEquipment', value: 15000000 },
      { key: 'kitchenTools', value: 5000000 },
      { key: 'initialSupplies', value: 8000000 },
      { key: 'etc', value: 4000000 },
    ],
    total: 115000000,
  },
  {
    type: 'B TYPE',
    typeKey: 'typeB',
    items: [
      { key: 'franchiseFee', value: 15000000 },
      { key: 'trainingFee', value: 3000000 },
      { key: 'deposit', value: 15000000 },
      { key: 'interior', value: 105000000 },
      { key: 'kitchenEquipment', value: 22000000 },
      { key: 'kitchenTools', value: 7000000 },
      { key: 'initialSupplies', value: 11000000 },
      { key: 'etc', value: 6000000 },
    ],
    total: 184000000,
  },
]

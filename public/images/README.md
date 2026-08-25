# 이미지 교체 가이드

아래 경로에 정확히 같은 파일명으로 이미지를 넣으면 코드 수정 없이 자동으로 반영됩니다.
파일이 없는 동안에는 자동으로 placeholder(라벨이 적힌 골드 패턴 박스)로 표시되므로 화면이 깨지지 않습니다.

경로/파일명은 `src/constants/images.js`, `src/data/menuData.js`, `src/data/videoData.js`,
`src/data/franchiseData.js`(BRAND_CONCEPTS)에서 관리합니다. 파일명을 바꾸고 싶으면 이 파일들의
경로 문자열을 함께 수정하세요.

## 권장 사이즈 / 비율

- HERO(각 페이지 상단 큰 배경): 1920x1080 이상, 16:9 ~ 21:9
- STORY / CONCEPT / CARD 이미지: 4:3
- 정사각형이 필요한 경우: 1:1
- 형식: jpg, png, webp 모두 가능 (아래 확장자와 다르면 경로 문자열도 함께 바꿔야 합니다)

## HOME

| 경로 | 용도 |
| --- | --- |
| `home/hero.jpg` | 첫 화면 Hero 배경 (야간/매장 분위기) |

## BRAND

| 경로 | 용도 |
| --- | --- |
| `brand/hero.jpg` | BRAND 페이지 상단 Hero 배경 |
| `brand/story.jpg` | Brand Story 섹션 이미지 |
| `brand/concept-01.jpg` | CONCEPT 01 독보적인 인테리어 (HOME 페이지 카드에도 재사용) |
| `brand/concept-02.jpg` | CONCEPT 02 시그니처 메뉴 |
| `brand/concept-03.jpg` | CONCEPT 03 MZ세대의 선택 |
| `brand/concept-04.jpg` | CONCEPT 04 트렌디한 마케팅 |
| `brand/interior-main.jpg` | Interior 섹션 메인(대형) 이미지 |
| `brand/interior-sub-01.jpg` | Interior 섹션 서브 이미지 1 |
| `brand/interior-sub-02.jpg` | Interior 섹션 서브 이미지 2 |

## MENU

| 경로 | 용도 |
| --- | --- |
| `menu/hero.jpg` | MENU 페이지 상단 Hero 배경 |
| `menu/gold-highball.jpg` | 1943 시그니처 골드하이볼 |
| `menu/smoke-sour.jpg` | 클래식 스모크 사워 |
| `menu/old-fashioned.jpg` | 1943 올드패션드 |
| `menu/truffle-risotto.jpg` | 트러플 크림 리조또 |
| `menu/aged-steak.jpg` | 숙성 안심 스테이크 |
| `menu/truffle-fries.jpg` | 트러플 감자튀김 |
| `menu/cheese-platter.jpg` | 치즈 플래터 |
| `menu/gold-macaron.jpg` | 골드 마카롱 플레이트 |

메뉴를 추가/삭제하려면 `src/data/menuData.js`의 배열 항목과 `image` 경로를 함께 수정하세요.

## STORE

| 경로 | 용도 |
| --- | --- |
| `store/hero.jpg` | STORE 페이지 상단 Hero 배경 |
| `store/map.jpg` | 매장 리스트 옆 지도 영역 (실제 지도 API 연동 전까지 사용하는 정적 이미지) |

## MARKETING

| 경로 | 용도 |
| --- | --- |
| `marketing/hero.jpg` | MARKETING 페이지 상단 Hero 배경 |
| `marketing/brand-film.jpg` | 1943CLASSIC 브랜드 필름 썸네일 |
| `marketing/menu-making.jpg` | 시그니처 메뉴 제작기 썸네일 |
| `marketing/owner-interview.jpg` | 가맹점주 인터뷰 썸네일 |
| `marketing/space-intro.jpg` | 1943CLASSIC 공간 소개 썸네일 |
| `marketing/open-event.jpg` | 오픈 이벤트 하이라이트 썸네일 |
| `marketing/startup-story.jpg` | 창업 스토리 다큐 썸네일 |

영상을 추가/삭제하려면 `src/data/videoData.js`의 배열 항목과 `thumbnail` 경로를 함께 수정하세요.

## FRANCHISE

| 경로 | 용도 |
| --- | --- |
| `franchise/hero.jpg` | FRANCHISE 페이지 상단 Hero 배경 |
| `franchise/contact-cta.jpg` | Contact CTA 섹션 배경 (HOME, FRANCHISE 페이지 하단에 공통 사용) |

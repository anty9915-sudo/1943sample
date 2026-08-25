# STORE 구현 문서

## 목표

전국 1943CLASSIC 매장을 쉽게 찾을 수 있도록 한다.

## Hero

```text
STORE

가까운 1943CLASSIC을 찾아보세요.
```

## Search

```text
지역 선택
검색어
검색
```

## 지역

```text
전체
서울
경기
인천
부산
대구
대전
광주
강원
충청
전라
경상
```

## Store List

각 매장:

* 매장명
* 주소
* 전화번호
* 영업시간
* 상세보기

## Desktop

```text
STORE LIST | MAP
```

왼쪽:

매장 리스트

오른쪽:

지도

## Mobile

```text
SEARCH
STORE LIST
MAP
```

순서로 배치한다.

## Search

JavaScript로 지역 및 매장명을 검색한다.

## Data

매장 정보는 JS 배열로 관리한다.

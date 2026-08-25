# FRANCHISE COST 구현 문서

## 목표

창업 비용을 보기 쉽게 정리한다.

## 비용 항목

```text
가맹비
교육비
보증금
인테리어
주방기기
주방기물
초도물류
기타비용
TOTAL
```

## 비교

Desktop:

```text
A TYPE | B TYPE
```

두 타입을 비교한다.

## Mobile

Table을 Card 구조로 변경한다.

## Design

가격은 큰 숫자로 보여준다.

Total은 Gold 색상으로 강조한다.

## Data

금액은 JS 객체로 관리한다.

HTML에 금액을 직접 반복 작성하지 않는다.

## 주의

실제 공식 비용 데이터가 없는 경우 임의의 가격을 확정값처럼 표시하지 않는다.

실제 데이터를 입력할 수 있는 Placeholder 구조로 제작한다.

# Custom Cursor 구현 문서

## 목표

Desktop에서만 브랜드에 맞는 Custom Cursor를 사용한다.

## 기본

작은 원형 Cursor.

## Hover

Button / Link / Card 위에 올라가면:

* 크기 증가
* Gold Border
* 내부 Text 표시 가능

## 구현

JavaScript로 Mouse Position을 추적한다.

```text
mousemove
↓
cursor position update
```

## Mobile

Custom Cursor를 완전히 비활성화한다.

## 주의

Custom Cursor가 실제 클릭을 방해하지 않도록 한다.

```css
pointer-events: none;
```

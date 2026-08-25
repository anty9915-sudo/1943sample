# MARKETING 구현 문서

## 목표

1943CLASSIC의 브랜드 마케팅과 YouTube 콘텐츠를 보여준다.

## Hero

```text
MARKETING

트렌드를 만드는 브랜드
```

## YouTube Section

영상 카드를 Grid로 구성한다.

각 카드:

```text
THUMBNAIL

PLAY

VIDEO TITLE
```

## Hover

* Thumbnail Zoom
* Dark Overlay
* Play Button 확대

## 클릭

YouTube 영상 URL로 이동한다.

## Data

영상 정보는 JS 배열로 관리한다.

```javascript
{
    title: "",
    thumbnail: "",
    url: ""
}
```

## Animation

IntersectionObserver를 사용한다.

## Design

Video Section은 일반 카드보다 조금 더 역동적인 느낌으로 제작한다.

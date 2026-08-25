// title은 src/i18n/dictionaries/*.js 의 data.videos.<key> 에서 언어별로 관리합니다.
// thumbnail 경로의 파일을 public/images/marketing/ 에 넣으면 자동으로 반영됩니다. (없으면 placeholder로 표시)
export const VIDEO_LIST = [
  {
    id: 1,
    key: 'brandFilm',
    url: 'https://www.youtube.com',
    thumbnail: '/images/marketing/brand-film.jpg',
  },
  {
    id: 2,
    key: 'menuMaking',
    url: 'https://www.youtube.com',
    thumbnail: '/images/marketing/menu-making.jpg',
  },
  {
    id: 3,
    key: 'ownerInterview',
    url: 'https://www.youtube.com',
    thumbnail: '/images/marketing/owner-interview.jpg',
  },
  {
    id: 4,
    key: 'spaceIntro',
    url: 'https://www.youtube.com',
    thumbnail: '/images/marketing/space-intro.jpg',
  },
  {
    id: 5,
    key: 'openEvent',
    url: 'https://www.youtube.com',
    thumbnail: '/images/marketing/open-event.jpg',
  },
  {
    id: 6,
    key: 'startupStory',
    url: 'https://www.youtube.com',
    thumbnail: '/images/marketing/startup-story.jpg',
  },
]

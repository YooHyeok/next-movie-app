"use client"
/**
 * Error component
 * movies 컴포넌트 page.tsx에서 사용하는 어떠한 컴포넌트에서 발생하는 에러에 대한 출력을 대신한다.
 * 페이지가 작동하지 않을 수는 있겠지만, 어플리케이션 전체적으로는 정상적으로 작동한다.
 * Error component에는 "use client"가 필수이다.
 * 예측 에러: movie-videos.tsx - throw new Error('Something broke...')
 * @returns 
 */
export default function ErrorOMG() {
  return <h1>lol something broke....</h1>
}
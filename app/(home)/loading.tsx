/**
 * Server Component에서 Data Fetching이 끝나기 전
 * 즉, async로 지정한 Component에서 await 작업이 끝나기 전까지 대신해서 출력될 컴포넌트이다.
 * React에서 isLoading ? "Loading" : <컴포넌트/> 코드의 기능과 같다.
 * @returns 
 */
export default function Loading() {
  return <h2>Loading...</h2>
}
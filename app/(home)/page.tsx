export const metadata = {
  title: "Home",
}
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

/**
 * Servier Side Fetching
 * Server Component는 서버에서 렌더링 된다.
 * Server Component에서 데이터를 Fetch했기 때문에 네트워크 혹은 console을 찍어봐도 
 * 클라이언트 측에서 데이터는 출력되지 않으므로 보안적인 측면에서 좋다.
 * 새로고침 하더라도 fetch에 대한 응답이 캐싱되었기 때문에 데이터 로딩이 매우 빠르다.
 * 최신데이터 관련 캐싱 or revalidation
 * @returns 
 */
async function getMovies() {
  await new Promise((resolve)=> setTimeout(resolve, 1000))
  const response = await fetch(URL)
  const json = await response.json()
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>
    {JSON.stringify(movies)}
  </div>
}
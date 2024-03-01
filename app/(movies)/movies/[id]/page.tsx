import { Suspense, lazy } from "react"
import { API_URL } from "../../../(home)/page"

const MovieVideos = lazy(() => import('../../../../components/movie-videos'));
import MovieInfo, {getMovie} from "../../../../components/movie-info"

/* async function getMovie(id: string) {
  console.log(`Fetching movie: ${Date.now()}`)
  await new Promise((resolve)=> setTimeout(resolve, 5000))
  const response = await fetch(`${API_URL}/${id}`)
  return response.json()
}
async function getVideos(id: string) {
  console.log(`Fetching Videos: ${Date.now()}`)
  await new Promise((resolve)=> setTimeout(resolve, 5000))
  const response = await fetch(`${API_URL}/${id}/videos`)
  return response.json()
} */

interface Iparams {
  params:{id:string};
}

/**
 * getMovie는 현재 서버 컴포넌트의 자식 컴포넌트인 MovieInfo 에서 호출되지만,
 * 이곳 page.tsx에서 호출되고 나면 해당 url에 대해 캐싱처리 되므로 최적화 된다.
 * @param param0 
 * @returns 
 */
export async function generateMetadata({params:{id}}: Iparams) {
  const movie = await getMovie(id);
  return {title: movie.title}
}

/**
 * Dynamic Routes
 * /movies/:id
 * 출력할 page.tsx를 [파라미터명] 이름의 디렉토리 폴더에 생성한다
 * /(movies)/movies/[id]/page.tsx
 * URL요청이 오면 page.tsx의 컴포넌트에 {params, searchParams} 두 props를 전달받는다.
 * params에는 디렉토리 라우트 경로 /movies/[id] 그리고 URL /movies/123 
 * 즉, id에 123이 매핑되어 데이터가 넘어온다.
 * searchParams의 경우 queryParamenter이다.
 * url에 ? 물음표 이후 key=data 형태로 요청할 경우
 * serachParams:{key:data} 형태로 데이터를 전달받을 수 있다.
 * @param param0 
 * @returns 
 */
export default async function MovieDetail({params:{id}}: Iparams) {
  /* const movie = await getMovie(id)
  const videos = await getVideos(id) */
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
  // return <h1>Movie: {movie.title}</h1>

  return <div>
    {/* Suspense 컴포넌트는 fallback이라는 prop이 있고 
    component가 await되는 동안 표시할 메시지를 render 할 수 있게 해준다. */}
    <Suspense fallback={<h1>Loading movie info</h1>}>
      <MovieInfo id={id}/>
    </Suspense>
    <Suspense fallback={<h1>Loading movie videos</h1>}>
      <MovieVideos id={id}/>
    </Suspense>
  </div>
}

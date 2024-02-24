
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
export default function MovieDetail({params:{id}}: {params:{id:string}}) {
  return <h1>Movie: {id}</h1>
}
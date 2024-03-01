"use client" /* useRouter와 onClick event에 대한 Hydration을 위해 클라이언트 컴포넌트로 전환 */
import Link from "next/link";
import { IMovie } from "../app/(home)/page";
import styles from "../styles/movie.module.css"
import { useRouter } from "next/navigation";
export default function Movie({id, poster_path, title}: IMovie) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`)
  }
  return <div className={styles.movie} key={id}>
  <img src={poster_path} alt={title} onClick={onClick}/>
  <Link prefetch href={`/movies/${id}`}>{title}</Link>
</div>
}
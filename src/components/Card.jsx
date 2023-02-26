import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="cursor-pointer sm:p-0 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
        ></Image>
        <div className="p-2">
        <h2 className="truncate text-lg font-bold my-2">
            {result.title || result.name}
          </h2>
          <p className="line-clamp-2 text-md my-2">{result.overview}</p>
          
          <p className="flex items-center">Release Date : 
            {result.release_date || result.first_air_date}
           
          </p>
          <p className="flex items-center"> Like: 

            <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
          </p>
          <p className="flex items-center "> Rating :   
               { result.vote_average}
          </p>
          <p className="flex items-center "> Language :   
               { result.original_language}
          </p>
        </div>
      </Link>
    </div>
  );
}

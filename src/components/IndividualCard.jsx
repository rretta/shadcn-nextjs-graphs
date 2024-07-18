import React from "react";
import "./IndividualCard.css";
import Image from "next/image";


export default function IndividualCard({movie, genreMovies}) {

  



 const posterImg = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path



 const getGenreNames = (ids, genres) => {
 return ids.map(id => {
      const genre = genres.find(g => g.id === id);
      return genre ? genre.name : null;
    }).filter(name => name).join(' - ');
}

const genreNames = getGenreNames(movie.genre_ids, genreMovies);

  return (
        <div className=" lg:mt-[10px] mt-6 grid place-items-center font-mono">
      
      <div className=" rounded-md bg-gray-800 shadow-lg lg:pb-2">
        <div className="md:flex px-4 leading-none max-w-4xl">
          <div className="flex-none ">
           <Image
            width={600}
            height={900}
            src= {posterImg}
            alt="pic"
            className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 "
          />           
          </div>

          <div className="flex-col text-gray-300">
   
            <p className="pt-4 text-2xl font-bold">{movie.original_title}</p>
            <hr className="hr-text" dataContent=""/>
            <div className="text-md flex justify-between px-4 my-2">
              <span className="font-bold">{genreNames}</span>
              <span className="font-bold"></span>
            </div>
            <p className="hidden md:block px-4 my-4 text-sm text-left">{movie.overview} </p>
            
            <p className="flex text-md px-4 my-2 ">
              Rating: {movie.vote_average.toFixed(1)}/10 
              
            </p>
            
           

          </div>
        </div>         
      </div>
    </div>
  );
}

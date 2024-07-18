"use client"
import { YearsChart } from "@/components/YearChart";
import { useEffect, useState } from "react";
import "../app/globals.css";
import IndividualCard from "@/components/IndividualCard";
import { CarouselSpacing } from "@/components/CarouselSpacing";

// import IndividualCard from "@/components/IndividualCard";

export default function Home() {
  const [topMovies, setTopMovies] = useState({});
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [allTime, setAllTime] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);
  const [averages, setAverages] = useState({});


  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const response = await fetch('/api/top-movies');
        const data = await response.json();
        setTopMovies(data);

        const averages = {};
        for (const year in data) {
          const movies = data[year];
          const totalVotes = movies.reduce((sum, movie) => sum + movie.vote_average, 0);
          averages[year] = (totalVotes / movies.length).toFixed(2);
        }

        setAverages(averages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    };


    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch('/api/trending-movies');
        const data = await response.json();

        setTrendingMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }


    const fetchGenreMovies = async () => {
      try {
        const response = await fetch('/api/genre-movies');
        const data = await response.json();


        setGenreMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }


    const fetchAllTimeMovies = async () => {
      try {
        const response = await fetch('/api/alltime-movies');
        const data = await response.json();

        console.log("All time", data)
        setAllTime(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }


    fetchAllTimeMovies()


    fetchGenreMovies()

    fetchTrendingMovies();


    fetchTopMovies();
  }, []);

  return (
    <main className="">
      <div className="flex flex-col items-center justify-center w-full  ">
        <YearsChart averanges={averages} />
        <h1 className="text-3xl font-bold">TRENDING RN</h1>
        {trendingMovies.map((movie) => (
          <IndividualCard genreMovies={genreMovies} key={movie.id} movie={movie} />
        ))}

        <h2 className="text-3xl font-bold mt-10 mb-5">ALL-TIME BEST AVERAGE</h2>
        <CarouselSpacing allTime={allTime} />

      </div>
    </main>
  );
}

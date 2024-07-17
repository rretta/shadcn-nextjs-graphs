"use client"
import { YearsChart } from "@/components/YearChart";
import { useEffect, useState } from "react";
import "../app/globals.css";
// import IndividualCard from "@/components/IndividualCard";

export default function Home() {
  const [topMovies, setTopMovies] = useState({});
  const [trendingMovies, setTrendingMovies] = useState({});
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
        console.log("DATITA", data)
        setTrendingMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }


    fetchTrendingMovies();


    fetchTopMovies();
  }, []);

  return (
    <main className="">
      <div className="">
        <YearsChart averanges={averages} />
        {/* <IndividualCard /> */}
      </div>
    </main>
  );
}

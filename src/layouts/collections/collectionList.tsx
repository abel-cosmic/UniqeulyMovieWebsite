"use client";

import React from "react";
import { useMoviesQuery } from "@/hooks/api/movies/getAllMovies";
import MovieCard from "@/components/card/movie";

const CollectionList = () => {
  const { data, isLoading, isError, error } = useMoviesQuery({
    title: "action", // Assuming a generic "action" genre or similar
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    console.error("Failed to fetch movies:", error);
    return <div>Error fetching movies.</div>;
  }
  console.log(data)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Movies List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default CollectionList;

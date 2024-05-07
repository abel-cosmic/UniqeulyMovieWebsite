// Import the function that fetches movies from the API.
import { getAllMovies } from "@/api/movies/getMovies";
import { useQuery } from "@tanstack/react-query";

// Define the interface for movie search parameters
interface MovieQueryParams {
  title: string;
}

// Setup a React Query hook to fetch movies based on the provided parameters
export const useMoviesQuery = (params: MovieQueryParams) =>
  useQuery({
    queryKey: ["movies", params.title], // Unique key for caching and refetching
    queryFn: () => getAllMovies(params), // Passing parameters to the fetch function
  });

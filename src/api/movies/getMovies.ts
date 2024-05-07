// Use 'server' directive (commonly used in frameworks like Next.js for server-side code)
"use server";

// Importing constants and axios
import { APIKEY_PUBLIC, apiURL } from "@/utils/constant/apiUrl";
import axios from "axios";

// TypeScript interface to define the structure of function parameters
interface GetMoviesParams {
  title: string;
  output_language?: string; // Optional parameter
}

export const getAllMovies = async (params: GetMoviesParams) => {
  try {
    const response = await axios.get(
      `https://streaming-availability.p.rapidapi.com/shows/search/title`,
      {
        params: {
          ...{
            country: "US",
            title: params.title,
            output_language: "en", // Default value if not provided
          },
          show_type: "movie", 
          series_granularity: "show", 
        },
        headers: {
          "X-RapidAPI-Key":
            "697aea07damsh1279e16429402cdp19e178jsnb690ee2d5c83",
          "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

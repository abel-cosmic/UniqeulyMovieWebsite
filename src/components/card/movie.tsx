import * as React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function MovieCard({ movie }: { movie: any }) {
  // Select an image size according to the display needs
  const imageUrl = movie.imageSet.horizontalPoster.w720;

  return (
    <Card className="w-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-4">
      <img
        src={imageUrl}
        alt={movie.title}
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
      <CardTitle>{movie.title}</CardTitle>
      <CardContent>
        <CardDescription>{movie.overview}</CardDescription>
        <p className="text-sm mt-2">Release Year: {movie.releaseYear}</p>
        <p className="text-sm mt-1">Director: {movie.directors.join(", ")}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Details</Button>
      </CardFooter>
    </Card>
  );
}

export default MovieCard;

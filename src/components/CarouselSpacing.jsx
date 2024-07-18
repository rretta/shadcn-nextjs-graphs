import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselSpacing({allTime}) {





  return (
    <Carousel className="w-full justify-center max-w-5xl mb-10 bg-transparent ">
      <CarouselContent className="-ml-1">
        {allTime?.map((movie, index) => (
          <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1">
              <Card className="bg-transparent border-none ">
                <CardContent className="flex flex-col aspect-square items-center justify-between bg-transparent ">
                  
                    <Image
            width={600}
            height={900}
           style={{objectFit: "contain"}}
        
            src= {`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
            alt={movie.title}
            className="h-full w-full rounded-xl  "
          />          
          <p className="text-white mt-2 ">{movie.title}</p>
          <p className="text-slate-100 mt-2 text-sm "><span className="text-white font-bold text-xl">{movie.vote_average.toFixed(1)}</span>/10</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-slate-700 border-none" />
      <CarouselNext className="bg-slate-700 border-none" />
    </Carousel>
  )
}

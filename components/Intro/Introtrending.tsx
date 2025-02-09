import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image'

function Introtrending() {
    return (
        <div className="relative w-full h-[1000px] bg-black px-40 flex flex-col gap-8">
            <p className="text-white font-bold text-2xl">Trending Now</p>

            {/* Carousel */}
            <Carousel>
                <CarouselContent className="flex gap-8">
                    <CarouselItem className="basis-1/7 ">

                    </CarouselItem>
                </CarouselContent>
                {/* Navigation Buttons */}
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Introtrending





{/* <div></div>
            <div className=' relative bg-white'>
                <Carousel >
                    <CarouselContent >
                        <CarouselItem className='h-[25vh] w-[10vw] rounded-lg hover:scale-110 transition-transform origin-center animate-in'>
                            <div
                                className="h-[25vh] w-[10vw] rounded-lg"
                                style={{ backgroundImage: "url('/trending/1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                            </div>

                        </CarouselItem>
                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
                {/* Numbers */}
// <div>
{/* <Image
    src="/trending/1.svg"
    alt="number"
    height={60}
    width={60}
    className="absolute left-[-30px] bottom-[20px] z-50"
/> */}
// </div> */}

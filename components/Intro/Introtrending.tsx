import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import CardTile from '../CardTile'
import { ArrowDownCircleIcon, BinocularsIcon, SmileIcon, Tv2Icon } from 'lucide-react'

const tiles = [
    {
        imageUrl: "/trending/1.png",
        svgUrl: "/trending/1.svg"
    },
    {
        imageUrl: "/trending/2.png",
        svgUrl: "/trending/2.svg"
    },
    {
        imageUrl: "/trending/3.png",
        svgUrl: "/trending/3.svg"
    },
    {
        imageUrl: "/trending/4.png",
        svgUrl: "/trending/4.svg"
    },
    {
        imageUrl: "/trending/5.png",
        svgUrl: "/trending/5.svg"
    },
    {
        imageUrl: "/trending/7.png",
        svgUrl: "/trending/7.svg"
    },
    {
        imageUrl: "/trending/8.png",
        svgUrl: "/trending/8.svg"
    },
    {
        imageUrl: "/trending/9.png",
        svgUrl: "/trending/9.svg"
    },
]

const textTiles = [
    {
        primaryText: "Enjoy on your TV",
        secondaryText: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
        Icon: <Tv2Icon size={60} />
    },
    {
        primaryText: "Download your shows to watch offline",
        secondaryText: "Save your favorites easily and always have something to watch.",
        Icon: <ArrowDownCircleIcon size={50} />
    },
    {
        primaryText: "Watch everywhere",
        secondaryText: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
        Icon: <BinocularsIcon size={80} />
    },
    {
        primaryText: "Create profiles for kids",
        secondaryText: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
        Icon: <SmileIcon size={50} />
    }
]

function Introtrending() {
    return (
        <div className="relative w-full bg-black px-40 flex flex-col gap-14">
            {/* Trending Text */}
            <div className='flex flex-col gap-4'>
                <p className="text-white text-2xl">Trending Now</p>

                {/* Trending Carousel */}
                <Carousel>
                    <CarouselContent className="flex gap-5">
                        {tiles.map((data, index) =>
                            < CarouselItem className="basis-1/7 rounded-lg" key={index}>
                                <CardTile imageUrl={data.imageUrl} svgUrl={data.svgUrl} />

                            </CarouselItem>
                        )}
                    </CarouselContent>
                    {/* Navigation Buttons */}
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className='flex flex-col gap-4'>
                {/* Reasons to join */}
                <p className="text-white text-2xl">More Reasons to Join</p>
                <div className="grid grid-cols-4 gap-2">
                    {textTiles.map((data, index) =>
                        <div className="h-[250px] w-[380] bg-gradient-to-br from-blue-950 to-fuchsia-950 rounded-2xl flex flex-col gap-8" key={index}>

                            {/* Text */}
                            <div className='m-5 flex flex-col gap-3'>
                                <p className="text-white text-2xl">{data.primaryText}</p>
                                <p className="text-gray-400">{data.secondaryText}</p>
                            </div>
                            {/* Icon */}
                            <div className='flex justify-end mx-5 '>
                                {data.Icon}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
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

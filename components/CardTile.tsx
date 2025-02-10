import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"

interface CardTileProps {
    imageUrl: string;
    svgUrl: string;
}

function CardTile({ imageUrl, svgUrl }: CardTileProps) {
    return (
        <Card className='h-[300px] w-[230px] scale-90 hover:scale-100 rounded-lg transition-transform duration-500 relative'>
            {/* Background Image for Card */}
            <CardContent
                className='h-full w-full rounded-lg border-none'
                style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </CardContent>
            {/* 
            SVG Icon at the top half inside and half outside
            <CardFooter
                className='absolute z-10 w-[70px] h-[70px] transform translate-x-[-50%]'
                style={{ backgroundImage: `url(${svgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </CardFooter> */}
        </Card>
    )
}

export default CardTile

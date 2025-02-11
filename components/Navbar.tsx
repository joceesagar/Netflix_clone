import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'


interface NavProps {
    buttonVariant: string,
    isUnderlined: boolean
    buttonTextSize: string
}
// This positioning takes the Navbar out of the normal document flow, so it no longer takes up space in the layout. Instead, it will be positioned relative to its nearest positioned ancestor. In this case, the nearest ancestor is the parent div with relative positioning. This means that the Navbar will be positioned at the top of the page, regardless of other content.
// top-0 left-0: These classes position the Navbar at the top-left corner of its positioned parent (which is the relative div).
// z-10: This sets the z-index of the Navbar to 10, ensuring that it is placed above the Introbg and the black overlay (which by default have a lower z-index). This ensures the Navbar will always appear on top of the background and overlay.
function Navbar({ buttonVariant, isUnderlined, buttonTextSize }: NavProps) {
    return (
        <div className={`w-full flex items-center justify-between px-32 absolute top-0 left-0 z-20 ${isUnderlined ? 'border-b' : ""}`}>
            {/* LOGO */}
            <div className=" h-[100px] w-[150px]">
                <Image src="/netflix-logo.svg" alt='logo' width={150} height={100} className='object-cover max-w-full max-h-full' quality={100} />
            </div>
            {/* SIGN IN BUTTON */}
            <div>
                <Button className={`font-bold text-${buttonTextSize}`} size={"default"} variant={buttonVariant === "ghost" ? "ghost" : "default"}>Sign In</Button>
            </div>
        </div>
    )
}

export default Navbar
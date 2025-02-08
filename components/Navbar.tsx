import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

function Navbar() {
    return (
        <div className='w-full bg-black flex items-center justify-between px-32'>
            {/* LOGO */}
            <div className=" h-[100px] w-[150px]">
                <Image src="/netflix-logo.svg" alt='logo' width={150} height={100} className='object-cover max-w-full max-h-full' quality={100} />
            </div>
            {/* SIGN IN BUTTON */}
            <div>
                <Button>Sign In</Button>
            </div>
        </div>
    )
}

export default Navbar
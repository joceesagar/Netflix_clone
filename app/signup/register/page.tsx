"use client"
import { Button } from '@/components/ui/button'
import { LaptopIcon, MonitorIcon, SmartphoneIcon, TabletIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Register() {

    return (
        <div className='flex items-center justify-between h-[86vh] flex-col'>
            <div className='w-[500px] flex flex-col gap-14 items-start mt-48'>
                {/* ICONS */}
                <div className='flex justify-center items-baseline gap-5'>
                    <LaptopIcon size={100} stroke='red' strokeWidth={0.5} />
                    <MonitorIcon size={100} stroke='red' strokeWidth={0.5} />
                    <div className='flex justify-center items-baseline'>
                        <TabletIcon size={70} stroke='red' strokeWidth={0.7} />
                        <SmartphoneIcon size={30} stroke='red' strokeWidth={1.5} />
                    </div>
                </div>
                {/* TEXT */}
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-1'>
                            <span className='text-sm'>STEP</span><span className='font-bold text-sm'>1</span><span className='text-sm'>OF</span><span className='font-bold text-sm'>3</span>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='font-[905] text-3xl '>Finish setting up your</span>
                            <span className='font-[905] text-3xl'>account</span>
                        </div>
                    </div>
                    <div>
                        <p className='font-[550]'>Netflix is personalized for you. Create a password to watch on any device at any time.</p>
                    </div>
                    {/* BUTTON */}
                    <div>
                        <Button className='w-full text-2xl font-semibold h-16 rounded-md hover:bg-red-700 '><Link href={"/signup/regform"}> Next</Link></Button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Register
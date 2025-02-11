import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { LaptopIcon, MonitorIcon, SmartphoneIcon, TabletIcon } from 'lucide-react'
import React from 'react'

function Register() {
    return (
        <div className='h-full w-full flex flex-col'>
            {/* NAVBAR */}
            <Navbar buttonVariant={"ghost"} isUnderlined={true} buttonTextSize={"xl"} />
            {/* SETUP */}
            <div className='flex items-center justify-between h-[100vh] flex-col'>
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
                            <Button className='w-full text-2xl font-semibold h-16 rounded-md hover:bg-red-700'> Next</Button>
                        </div>
                    </div>
                </div>
                {/* BOTTOMBAR */}
                <div className='h-[150px] border-t-1 border-zinc-300 w-full bg-zinc-200 pt-6 pl-32 flex flex-col gap-4'>
                    <p className='text-gray-500 font-semibold hover:underline'>Questions? Contact us.</p>
                    <div className='grid grid-cols-4 gap-y-3'>
                        <p className='text-sm text-gray-500 font-medium hover:underline'>FAQ</p>
                        <p className='text-sm text-gray-500 font-medium hover:underline'>Help Center</p>
                        <p className='text-sm text-gray-500 font-medium hover:underline'>Terms of Use</p>
                        <p className='text-sm text-gray-500 font-medium hover:underline'>Privacy</p>
                        <p className='text-sm text-gray-500 font-medium hover:underline'>Cookie Preferences</p>
                        <p className='text-sm text-gray-500 font-medium hover:underline'>Corporate Information</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register
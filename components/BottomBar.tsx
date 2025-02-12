import React from 'react'

function BottomBar() {
    return (
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
    )
}

export default BottomBar
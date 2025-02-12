"use client"

import BottomBar from '@/components/BottomBar'
import Navbar from '@/components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'

const slideVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }
}

function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname() // Detects route changes

    return (
        <div className='h-full w-full flex flex-col overflow-hidden'>
            {/* NAVBAR */}
            <Navbar buttonVariant="ghost" isUnderlined={true} buttonTextSize="xl" textColor='black' />

            {/* Animated Page Transition */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={pathname} // Ensures animation runs when path changes
                    className="flex-grow"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={slideVariants}
                >
                    {children}
                </motion.div>
            </AnimatePresence>

            {/* BOTTOMBAR */}
            <BottomBar />
        </div>
    )
}

export default Layout

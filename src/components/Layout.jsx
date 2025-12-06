import React from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero_section.jsx'

const Layout = () =>
{
    return (
        <div className='min-h-screen w-full flex flex-col relative bg-transparent'>
            <Navbar />

            {/* 1. Add 'relative' to this main container */}
            <main className='max-w-5xl mx-auto w-full px-4 relative'>

                {/* --- YOUR LEFT BORDER LINE --- */}
                <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent"></div>

                {/* Optional: If you want a Right Line too, add this: */}
                <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent"></div>

                <Hero />
            </main>
        </div>
    )
}

export default Layout
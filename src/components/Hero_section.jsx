import React from 'react'
import Button from './Button.jsx'
import dashboardImage from '../assets/background-image.png'

const Hero = () =>
{
  return (
    <div className='mt-40 flex flex-col justify-center items-center'>

      {/* Badge */}
      <div className="flex justify-center items-center text-xs font-semibold rounded-2xl px-2 w-fit mx-auto bg-gray-100 hover:bg-[#e5e9ee] cursor-pointer border border-gray-300 gap-1 transition-colors">
        We're hiring Founding Ruby Engineers
        <div className="flex justify-center">
          <span className="material-symbols-outlined text-neutral-600 text-base">
            arrow_right_alt
          </span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-6xl font-semibold text-center mt-10 leading-tight text-black">
        <span className='block'>Magically simplify</span>
        <span className='block'>accounting and taxes</span>
      </h1>

      {/* Subtext */}
      <p className='flex flex-col text-center text-lg text-gray-600 mt-6 max-w-xl font-normal'>
        <span className='block'>
          Automated bookkeeping. Effortless tax filing. Financial clarity.
        </span>
        <span className='block'>
          Set up in 10 mins. Back to building by 11:32am.
        </span>
      </p>

      {/* Buttons */}
      <div className="buttons gap-3 mt-8 flex">
        <Button>
          Get started
        </Button>
        <Button className="text-black bg-transparent flex justify-center items-center shadow-none hover:border-amber-100 hover:bg-[#d3e1ef]">
          Pricing
          <span className="material-symbols-outlined text-neutral-600 text-base flex justify-center items-center">
            arrow_right_alt
          </span>
        </Button>
      </div>

      <p className='text-[#949da5] text-xs mt-6'>For US-based startups.</p>

      {/* --- DASHBOARD IMAGE SECTION WITH LINE --- */}
      {/* Added 'relative' and 'w-full' to manage the layout */}
      <div className="mt-20 relative w-full">

        {/* 
            THE FULL WIDTH LINE 
            - absolute top-0: Sits right above the image
            - left-1/2 -translate-x-1/2: Centers it perfectly
            - w-screen: Forces it to be the width of the ENTIRE screen (breaking out of the container)
            - bg-gradient-to-r: Fades out at the left and right edges of the screen
        */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-screen h-px bg-linear-to-r from-transparent via-neutral-300 to-transparent"></div>

        <img
          className='rounded-2xl shadow-2xl border border-gray-200'
          src={dashboardImage}
          alt="dashboardImage"
        />
      </div>
    </div>
  )
}

export default Hero
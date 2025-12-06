import React, { useState, useEffect } from 'react'
import Logo from '../assets/finta-logo-light.svg'
import Button from './Button.jsx'

const Navbar = () =>
{
  // 1. State to track if user has scrolled
  const [scrolled, setScrolled] = useState(false);

  // 2. Effect to listen for scroll events
  useEffect(() =>
  {
    const handleScroll = () =>
    {
      // If user scrolls down more than 20px, set scrolled to true
      if (window.scrollY > 20)
      {
        setScrolled(true);
      } else
      {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // 3. DYNAMIC CLASSES:
    // - sticky top-0 z-50: Keeps it at the top
    // - transition-all duration-300: Makes the change smooth
    // - CONDITIONAL: If scrolled, add blur, opacity, and shadow. If not, transparent or solid.
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b 
      ${scrolled
          ? 'bg-white/70 backdrop-blur-md shadow-md border-gray-200 py-3'
          : 'bg-transparent border-transparent py-4'
        }`}
    >
      {/* 
         Added 'max-w-5xl mx-auto' here so your Logo and Buttons 
         align perfectly with your Hero section 
      */}
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">

        {/* Left side: Logo */}
        <div className='cursor-pointer'>
          <img src={Logo} alt="Finta logo" className="h-6" />
        </div>

        {/* Right side: Nav links + CTA Button */}
        <nav className="hidden md:flex space-x-6 items-center font-semibold text-sm">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-600 hover:text-black transition-colors"
            >
              {link.title}
            </a>
          ))}
          <Button>
            Get Started
          </Button>
        </nav>
      </div>
    </div>
  )
}

// Don't forget to define your links array outside or inside the component
const links = [
  { title: 'Founders', href: '#' },
  { title: 'Guide', href: '#' },
  { title: 'Pricing', href: '#' },
  { title: 'Log In', href: '#' }
];

export default Navbar
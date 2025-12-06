import React from 'react'
import { cn } from '../lib/utils.jsx'
const Button = ({ className, children, ...props }) =>
{
    return (
        <button
            className={cn(
                "bg-[#2b7dff] text-white px-3 py-2 border-none font-semibold text-shadow-2xs rounded-md hover:bg-[#2262c7] transition ease-in cursor-pointer shadow-xl",
                className
            )}
            {...props}
            >
            {children}

        </button>

    )
}

export default Button

'use client';

import { cn } from "@/lib/uitlis";
import { forwardRef } from "react";

export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

 const  Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type= 'button',
    ...props
}, ref )=>{
    return(
        <button
        className={cn( 
        ` w-auto
          rounded-full
          bg-black
          border-transparent
          px-5
          py-4
          disabled: cursor-not-allowd
          disabled:opacity-50
          text-white
          font-semibold
          hover:opacity-75
          transition
        `,
        className
        
        )} 

        ref={ref}  
         {...props}
        >

        {children}

        </button>
    )
})

Button.displayName= 'Button';

export default Button;
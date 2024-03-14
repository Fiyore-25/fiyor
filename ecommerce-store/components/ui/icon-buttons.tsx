'use client';

import { cn } from "@/lib/uitlis";
import { MouseEventHandler } from "react";

interface IconButtonProps{
    onClick?:MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    calssname?:string;
}

const IconButton:React.FC<IconButtonProps> =({
    onClick,
    icon,
    calssname
})=>{




    return (
     <button   
      onClick={onClick}
      className={cn("rounded-full flex items-center justify-center bg-white border  shadow-md p-2 hover:scale-110 transition" ,
      calssname 
      )}>
        {icon}

     </button>
    )
}

export default IconButton;
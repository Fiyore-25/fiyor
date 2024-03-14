'use client';

import { cn } from "@/lib/uitlis";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface MainNavbarProps{
    data:   Category[]
};



 const MainNavbar:React.FC<MainNavbarProps> = ({
    data,
 })=>{

    const pathname = usePathname();

    const routes = data.map((route)=>({
        href:`/category/${route.id}`,
        label: route.name,
        acive: pathname ===`/category/${route.id}`
    }))




    return (
        <nav className="flex max-6 items-center space-x-4 lg:space-x-6">
            {routes.map((route)=>(
                <Link 
                href={route.href}
                key={route.href}
                className={cn('text-sm font-medium transition-colors hover:text-black',
                  route.acive ? 'text-black' : 'text-neutral-500'
                )}
                >
                    
                </Link>
            ))}

        </nav>
    )
 }

export default MainNavbar;
'use client'
import Home from "@/app/AVATS/onlineHome.aspx/page";
import RetreiveApplication from "@/app/AVATS/retrieveApplication.aspx/page";
import { usePathname } from "next/navigation"

export default function MainContent(){
    const pathName = usePathname();
    return(
        <div className="w-4/5">
            {
                pathName === '/AVATS/retrieveApplication.aspx' ? <RetreiveApplication /> : <Home />
            }
        </div>
    )
}
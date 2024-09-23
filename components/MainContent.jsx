"use client";

import MainHome from "@/app/AVATS/OnlineHome.aspx/page";
import RetreiveApplication from "@/app/AVATS/retrieveApplication.aspx/page";
import { usePathname } from "next/navigation";

export default function MainContent() {
  const pathName = usePathname();
  return (
    <>
      {pathName === "/AVATS/retrieveApplication.aspx" ? (
          
            <RetreiveApplication />
        
      ) : (
            <MainHome />
      )}
    </>
  );
}

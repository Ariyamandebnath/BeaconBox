'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


const isClient = typeof window === 'object';

export const useIsMobile = () => {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(isClient && window.innerWidth <= 768);

    useEffect(() => {
        const handledResize = () => {
            const newIsMobile = window.innerWidth <= 768;
            setIsMobile(newIsMobile);
        };

        if (isClient) {
            window.addEventListener('resize', handledResize);

            return () => {
                window.removeEventListener('resize', handledResize);
            }
        }
    }, [pathname]);

    return isMobile;
}
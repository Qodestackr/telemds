'use client'

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"


export function minutesInSeconds(minute: number): number {
    return minute * 60
};


export function Providers({ children }: { children: ReactNode }) {
    return (
        <SessionProvider refetchInterval={minutesInSeconds(4)}>
            {children}
        </SessionProvider>
    )
}
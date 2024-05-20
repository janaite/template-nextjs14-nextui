'use client'

import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation'

// https://nextui.org/docs/guide/routing
export function Providers({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <NextUIProvider navigate={router.push}>
            {children}
        </NextUIProvider>
    )
}
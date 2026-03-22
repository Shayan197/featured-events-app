'use client';

import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from '@/components';

export const Navbar = (): React.JSX.Element => {
    return (
        <nav className="sticky top-0 w-full flex items-center justify-between px-6 py-4 border-b border-border bg-background z-20">
            <h1 className="text-heading-md md:text-heading-xl font-bold text-foreground-primary">
                Eventify <span className="text-primary text-heading-xl md:text-heading-2xl">.</span>
            </h1>

            <div className="flex gap-4 sm:gap-6 text-body-sm md:text-body-md font-medium items-center text-foreground-primary flex-wrap">
                <Link href="/">Home</Link>
                <Link href="#events">Events</Link>
                <Link href="#contact">Contact</Link>
                <ThemeToggle />
            </div>
        </nav>
    );
};

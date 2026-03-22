import { StaticImageData } from 'next/image';

type Event = {
    name: string;
    date: string;
    location: string;
    description: string;
    image: StaticImageData; // Add this for Next.js Image import type
};

export type { Event };

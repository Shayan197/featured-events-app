import Image from 'next/image';
import React from 'react';
import { Event } from '@/types/event.type';

export const EventCard = ({
    name,
    date,
    location,
    description,
    image,
}: Event): React.JSX.Element => {
    return (
        <div className="p-5 border border-border rounded-2xl shadow-sm hover:shadow-md transition group">
            <div className="relative w-full h-52 md:h-60 lg:h-64 rounded-xl overflow-hidden mb-6">
                <Image
                    src={image}
                    alt={name}
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={80}
                    placeholder="blur"
                    className="transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            <h3 className="text-heading-md font-semibold">{name}</h3>
            <p className="text-body-sm text-foreground-secondary">{date}</p>
            <p className="text-body-sm text-foreground-secondary">{location}</p>
            <p className="mt-3 text-body-sm text-foreground-secondary">{description}</p>

            <button className="mt-4 w-full py-2 bg-button text-background rounded-lg hover:opacity-90 cursor-pointer transition">
                Register Now
            </button>
        </div>
    );
};

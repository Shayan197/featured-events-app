import { Art1, Art2, Art3 } from '@/assets/webp';
import type { Event } from '@/types/event.type';

export const events: Event[] = [
    {
        name: 'Tech Conference 2026',
        date: 'March 25, 2026',
        location: 'Lahore',
        description: 'Explore the latest trends in technology and innovation.',
        image: Art1,
    },
    {
        name: 'Startup Meetup',
        date: 'April 2, 2026',
        location: 'Islamabad',
        description: 'Connect with entrepreneurs and investors.',
        image: Art2,
    },
    {
        name: 'Design Workshop',
        date: 'April 10, 2026',
        location: 'Karachi',
        description: 'Hands-on UI/UX design learning experience.',
        image: Art3,
    },
];

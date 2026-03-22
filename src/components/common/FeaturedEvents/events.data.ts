import { Art1, Art2, Art3 } from '@/assets/webp';
import type { Event } from '@/types/event.type';

export const events: Event[] = [
    {
        name: 'Future Tech Summit 2026',
        date: 'March 25, 2026',
        location: 'Lahore',
        description:
            'Step into the future of technology where innovation meets real-world impact. Discover how modern solutions are shaping tomorrow.',
        image: Art1,
    },
    {
        name: 'Startup Connect Meetup',
        date: 'April 2, 2026',
        location: 'Islamabad',
        description:
            'A space where ideas turn into opportunities. Network with ambitious founders, exchange insights, and experience the energy of a growing startup ecosystem.',
        image: Art2,
    },
    {
        name: 'Creative Design Experience',
        date: 'April 10, 2026',
        location: 'Karachi',
        description:
            'An immersive design journey focused on crafting user-centric experiences. Learn, experiment, and elevate your creativity with hands-on UI/UX practices.',
        image: Art3,
    },
];

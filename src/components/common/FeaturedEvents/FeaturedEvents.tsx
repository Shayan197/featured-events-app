import { EventCard } from '@/components';
import { events } from './events.data';

export const FeaturedEvents = (): React.JSX.Element => {
    return (
        <section id="events" className="px-6 py-16">
            <h2 className="text-heading-xl md:text-heading-2xl font-bold text-center text-foreground-primary">
                Featured Events
            </h2>

            <p className="text-center mt-2 text-foreground-secondary text-body-sm md:text-body-md">
                Handpicked events happening around you — explore and register in seconds.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
                {events.map((event, i) => (
                    <EventCard
                        key={i}
                        name={event.name}
                        date={event.date}
                        location={event.location}
                        description={event.description}
                        image={event.image}
                    />
                ))}
            </div>
        </section>
    );
};

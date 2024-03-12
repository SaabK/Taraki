import { events } from "../data";

export default function Events() {
    return (
        <section id="events" className="container">
            <h2 className="center">Events</h2>
            <p className="tagline center">
                Join our monthly events & grow as a person
            </p>

            <div className="events">
                {events.map((event) => (
                    <div className="card">
                        <img
                            src={event.image}
                            alt={`${event.name} at ${event.location}`}
                        />

                        <p className="tag">{event.location}</p>

                        <h3>{event.name}</h3>
                        <p>
                            {event.description ||
                                `${event.name} at ${event.location} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos!`}
                        </p>

                        <button className="link">View Event</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function Hero() {
    return (
        <section id="hero">
            <div className="banner" />

            <div className="even-columns container">
                <h1>Unlock Your Potential and Join Taraki Today</h1>

                <div className="text-content">
                    <p>
                        Taraki is a self-help community dedicated to empowering
                        individuals to become the best version of themselves.
                        Join us to connect with like-minded individuals, engage
                        in meaningful discussions, and embark on a journey of
                        self-improvement.
                    </p>

                    <div className="single-line">
                        <button className="btn btn-primary">Join</button>

                        <button className="btn btn-secondary">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

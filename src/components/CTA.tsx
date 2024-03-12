export default function CTA() {
    return (
        <section id="cta" className="container">
            <div>
                <h2>Join the Taraki Community Today</h2>
                <p className="tagline">
                    Join Taraki and unlock your true potential today!
                </p>
            </div>

            <div>
                <form>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                    />
                    <button className="btn btn-primary">Join</button>
                </form>
                <p className="tagline">
                    By joining, you agree to our Terms & Conditions
                </p>
            </div>
        </section>
    );
}

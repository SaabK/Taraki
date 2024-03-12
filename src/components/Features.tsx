import successImage from "../assets/success-image.jpg";
import callIcon from "../assets/call.svg";
import magnifierIcon from "../assets/magnifier.svg";

export default function Features() {
    return (
        <section id="features" className="bg">
            <div className="container even-columns">
                <div className="text-content">
                    <span className="headline">Empower</span>
                    <h2>Join Taraki and unlock your potential</h2>
                    <p>
                        Taraki is a safe space where you can openly discuss
                        self-improvement topics, connect with like-minded
                        individuals, and discover new ways to become the best
                        version of yourself. Join our community today and start
                        your journey towards personal growth and empowerment.
                    </p>

                    <div className="features-list">
                        <div className="hot-card">
                            <img src={callIcon} alt="" />
                            <h3>Connect Now</h3>
                            <p>
                                Engage in meaningful discussions with our
                                supportive community members.
                            </p>
                        </div>

                        <div className="hot-card">
                            <img src={magnifierIcon} alt="" />
                            <h3>Discover More</h3>
                            <p>
                                Explore our self-improvement activities and
                                events happening near you.
                            </p>
                        </div>
                    </div>
                </div>

                <img src={successImage} alt="Success" />
            </div>
        </section>
    );
}

import { testimonials } from "../data";
import star from "../assets/star.svg";

export default function Testimonials() {
    return (
        <section id="testimonials" className="bg">
            <div className="container">
                <h2>Customer Testimonials</h2>
                <p className="tagline">
                    Join Taraki and unlock your true potential today!
                </p>

                <div className="testimonials even-columns">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial hot-card" key={index}>
                            <div className="stars">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <img src={star} key={index} />
                                ))}
                            </div>

                            <p>{testimonial.testimonial}</p>

                            <div className="info">
                                <img src={testimonial.image} alt="" />
                                <div>
                                    <strong>{testimonial.name}</strong>
                                    <span>{testimonial.occupation}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

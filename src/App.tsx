import CTA from "./components/CTA";
import Events from "./components/Events";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <Events />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
        </>
    );
}

export default App;

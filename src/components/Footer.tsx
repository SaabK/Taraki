import { socials } from "../data";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Footer() {
    return (
        <footer className="container">
            <div className="top">
                <Logo />
                <Nav />
                <div className="socials">
                    {socials.map((social, index) => (
                        <a href={social.href} key={index}>
                            <img src={social.image} alt={social.name} />
                        </a>
                    ))}
                </div>
            </div>

            <hr />

            <div className="bottom">
                <span>©️ 2024 Taraki, All rights reserved</span>
                <menu>
                    <li className="link">
                        <a href="">Privacy Policy</a>
                    </li>
                    <li className="link">
                        <a href="">Terms & Conditions</a>
                    </li>
                    <li className="link">
                        <a href="">Cookie Policy</a>
                    </li>
                </menu>
            </div>
        </footer>
    );
}

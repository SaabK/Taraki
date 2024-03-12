import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
    return (
        <header className="container">
            <Logo />
            <Nav />
            <button className="btn btn-primary">Sign up</button>
        </header>
    );
}

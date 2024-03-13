import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
    return (
        <header className="container">
            <div>
                <HamburgerMenu />
                <Logo />
            </div>
            <Nav />
            <button className="btn btn-primary">Sign up</button>
        </header>
    );
}

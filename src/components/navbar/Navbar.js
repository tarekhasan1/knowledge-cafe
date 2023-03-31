import logo from "../../assets/images/Faridul-Islam.jpg";
import "./Navbar.style.css";

export default function Navbar() {
    return (
        <header>
            <div id="nav-container">
                <h1 id="navbar-brand">Knowledge Cafe</h1>
                {/* <ul id="navbar">
                    <li>
                        <a href="home">Home</a>
                    </li>
                    <li>
                        <a href="about">About Us</a>
                    </li>
                    <li>
                        <a href="contact">Contact</a>
                    </li>
                    <li>
                        <a href="home">
                            <img src={logo} alt="" id="logo" />
                        </a>
                    </li>
                </ul> */}
                <img src={logo} alt="" id="logo" />
            </div>
            <hr />
        </header>
    );
}

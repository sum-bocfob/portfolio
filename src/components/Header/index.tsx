import React from "react";
import Container from "../Container";
import "./Header.scss";

const Header = () => {
    return (
        <header>
            <nav>
                <Container>
                    <ul className="header_list">
                        <li>
                            <a href="#profile" className="upperCase">
                                Profile
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="upperCase">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#works" className="upperCase">
                                Works
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="upperCase">
                                Contact
                            </a>
                        </li>
                    </ul>
                </Container>
            </nav>
        </header>
    );
};

export default Header;

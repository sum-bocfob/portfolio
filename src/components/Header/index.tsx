import React from "react";
import Container from "../Container";
import st from "./Header.module.scss";
import { gsap } from "gsap";

import { SplitText } from "gsap/SplitText";
import HeaderLink from "../HeaderLink";

gsap.registerPlugin(SplitText);

const headerTexts: string[] = ["Profile", "Skills", "Works", "Contact"];

const Header = () => {
    return (
        <header>
            <nav>
                <Container>
                    <ul className={st.header_list}>
                        {headerTexts.map((text) => (
                            <HeaderLink key={text} name={text} />
                        ))}
                    </ul>
                </Container>
            </nav>
        </header>
    );
};

export default Header;

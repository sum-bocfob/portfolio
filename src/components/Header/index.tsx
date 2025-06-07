import Container from "../Container";
import st from "./Header.module.scss";
import { gsap } from "gsap";

import { SplitText } from "gsap/SplitText";
import HeaderLink from "../HeaderLink";
import { useState } from "react";

gsap.registerPlugin(SplitText);

const headerTexts: string[] = ["Profile", "Skills", "Works", "Contact"];

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((cur) => !cur);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <header>
            <nav className={open ? st.open : ""} onClick={handleClose}>
                <Container>
                    <ul className={st.header_list}>
                        {headerTexts.map((text) => (
                            <HeaderLink key={text} name={text} />
                        ))}
                    </ul>
                </Container>
            </nav>
            <div className={open ? `${st.hamburger} ${st.open}` : `${st.hamburger}`} onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Header;

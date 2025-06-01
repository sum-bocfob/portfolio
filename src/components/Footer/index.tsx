import Container from "../Container";
import Heading from "../Heading";
import st from "./Footer.module.scss";

import React from "react";

const Footer = () => {
    return (
        <footer className={st.footer}>
            <Container>
                <Heading jaText="お問い合わせ" enText="Contact" />
                <p className={st.text}>下記メールアドレスにてお問い合わせください。</p>
                <a className={st.address} href="mailto:takuya.hisano1108@gmail.com">
                    takuya.hisano1108@gmail.com
                </a>
            </Container>{" "}
        </footer>
    );
};

export default Footer;

import Container from "../Container";
import Heading from "../Heading";
import st from "./Footer.module.scss";
import logo_X from "../../assets/logo_x.svg";

const Footer = () => {
    return (
        <footer id="contact" className={st.footer}>
            <Container>
                <Heading jaText="お問い合わせ" enText="Contact" />
                <p className={st.text}>下記メールアドレス、SNSにてお問い合わせください。</p>
                <div className={st.links}>
                    <a className={st.address} href="mailto:takuya.hisano1108@gmail.com">
                        takuya.hisano1108@gmail.com
                    </a>
                    <a className={st.x_link} href="https://x.com/takuya_hisano" target="_blank">
                        <img src={logo_X} alt="Xのロゴ" />
                    </a>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;

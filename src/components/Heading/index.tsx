import st from "./Heading.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Prop = {
    jaText: string;
    enText: string;
    upperCase?: boolean;
};

const Heading = ({ jaText, enText, upperCase = true }: Prop) => {
    return (
        <hgroup className={st.heading}>
            <p>{jaText}</p>
            <h2 className={upperCase ? "upperCase" : ""}>{enText}</h2>
        </hgroup>
    );
};

export default Heading;

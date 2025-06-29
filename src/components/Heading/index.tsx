import st from "./Heading.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { showRollUp, showScaleUp, showUp } from "../../TextAnimations";
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

type Prop = {
    jaText: string;
    enText: string;
    upperCase?: boolean;
    animType?: -1 | 0 | 1 | 2;
};

const Heading = ({ jaText, enText, upperCase = true, animType = 0 }: Prop) => {
    // h2要素
    const h2Ref = useRef<HTMLHeadingElement>(null);
    // 文字の配列
    const charRef = useRef<HTMLElement[] | null>(null);

    useGSAP(() => {
        if (animType !== -1) {
            document.fonts.ready.then(function () {
                const options: SplitText.Vars =
                    animType === 2
                        ? { type: "chars, lines" }
                        : {
                              type: "chars, lines",
                              mask: "lines",
                          };
                const split = SplitText.create(h2Ref.current, options);
                charRef.current = split.chars as HTMLElement[];

                if (animType === 0) {
                    showUp(charRef.current, h2Ref.current);
                } else if (animType === 1) {
                    showRollUp(charRef.current, h2Ref.current);
                } else if (animType === 2) {
                    showScaleUp(charRef.current, h2Ref.current);
                }

                return () => {
                    split.revert();
                };
            });
        }
    }, []);

    return (
        <hgroup className={st.heading}>
            <p>{jaText}</p>
            <h2 ref={h2Ref} className={upperCase ? "upperCase" : ""}>
                {enText}
            </h2>
        </hgroup>
    );
};

export default Heading;

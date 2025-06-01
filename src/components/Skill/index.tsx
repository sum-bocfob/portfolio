import { useEffect, useRef } from "react";
import { type SkillType } from "../../skills";
import st from "./Skill.module.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skill = ({ name, desc, level, img }: SkillType) => {
    const gaugeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const elm = gaugeRef.current;
        if (!elm) return;

        ScrollTrigger.create({
            trigger: elm,
            start: "top 80%",
            onEnter: () => elm.classList.add(st["meter_gauge__" + level]),
            once: true,
        });
    });

    return (
        <li className={st.item}>
            <div className={st.descs}>
                <div className={st.heading}>
                    <h3>{name}</h3>
                    <div className={st.meter}>
                        <div ref={gaugeRef} className={st.meter_gauge}></div>
                    </div>
                </div>
                <p>{desc}</p>
            </div>
            <div className={st.logo}>
                <img src={img} alt="" />
            </div>
        </li>
    );
};

export default Skill;

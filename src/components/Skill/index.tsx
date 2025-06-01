import { type SkillType } from "../../skills";
import st from "./Skill.module.scss";

const Skill = ({ name, desc, level, img }: SkillType) => {
    return (
        <li className={st.item}>
            <div className={st.descs}>
                <div className={st.heading}>
                    <h3>{name}</h3>
                    {/* <div>{level}</div> */}
                    <div className={st.meter}>
                        <div className={`${st.meter_gauge} ${st["meter_gauge__" + level]}`}></div>
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

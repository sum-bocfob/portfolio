import type { WorkType } from "../../works";
import Container from "../Container";
import Section from "../Section";
import st from "./UsedSkills.module.scss";

import React from "react";

const UsedSkills = (props: { work: WorkType }) => {
    return (
        <Section bgBlack={true} id="">
            <Container>
                <h3 className={st.heading}>主に使用したもの</h3>
                <ul className={st.list}>
                    {props.work.usedSkills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </Container>
        </Section>
    );
};

export default UsedSkills;

import Container from "../Container";
import Grid from "../Grid";
import Heading from "../Heading";
import Section from "../Section";
import Skill from "../Skill";
import st from "./Skills.module.scss";

import skills from "../../skills";

const Skills = () => {
    return (
        <Section bgBlack={true}>
            <Container>
                <Heading jaText="できること" enText="Skills" />
                <Grid colNum={2}>
                    {skills.map((skill) => (
                        <Skill {...skill} />
                    ))}
                </Grid>
            </Container>
        </Section>
    );
};

export default Skills;

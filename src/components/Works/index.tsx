import Container from "../Container";
import Grid from "../Grid";
import Heading from "../Heading";
import Section from "../Section";
import Work from "../Work";
import st from "./Works.module.scss";
import works from "../../works";

const Works = () => {
    return (
        <Section id="works" bgBlack={false}>
            <Container>
                <Heading jaText="制作物" enText="Works" />
                <Grid colNum={3}>
                    {works.map((work) => (
                        <Work key={work.name} {...work} />
                    ))}
                </Grid>
                <p className={st.note}>※: Web上に公開されているデザインカンプを元に作成したものです。</p>
            </Container>
        </Section>
    );
};

export default Works;

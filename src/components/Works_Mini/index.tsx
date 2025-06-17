import Container from "../Container";
import Grid from "../Grid";
// import Heading from "../Heading";
import Section from "../Section";
import Work from "../Work";
import works, { type WorkType } from "../../works";
import st from "./Works_Mini.module.scss";

const Works_Mini = ({ curWork }: { curWork: WorkType }) => {
    const excludedWorks = works.filter((work) => {
        if (curWork.name !== work.name) {
            return work;
        }
    });
    return (
        <Section id="works" bgBlack={false}>
            <Container>
                {/* <Heading jaText="制作物" enText="Works" /> */}
                <h2 className={st.title}>その他の制作物</h2>
                <Grid colNum={5}>
                    {excludedWorks.map((work) => (
                        <Work key={work.name} {...work} inTopPage={false} />
                    ))}
                </Grid>
            </Container>
        </Section>
    );
};

export default Works_Mini;

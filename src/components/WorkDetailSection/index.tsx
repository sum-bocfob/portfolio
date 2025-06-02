import type { WorkType } from "../../works";
import Container from "../Container";
import Heading from "../Heading";
import Section from "../Section";
import st from "./WorkDetailSection.module.scss";

const WorkDetailSection = (props: { work: WorkType }) => {
    const { name, img, siteUrl, fromComp, type, duration_day, descJSX } = props.work;

    return (
        <Section bgBlack={false} id="">
            <Container>
                <Heading jaText={type} enText={name} />
                <div className={st.duration}>
                    制作期間: <time dateTime={`${duration_day}d`}>{duration_day}日間</time>
                </div>
                <p className={st.subText}>{fromComp ? "" : "chatGPTに架空のクライアントになってもらい、その依頼に対応する形で作成しました。"}</p>
                <div className={st.contents}>
                    <div className={st.imgAndLink}>
                        <img className={st.img} src={img} alt="" />
                        <a className={st.link} href={siteUrl} target="_blank">
                            {siteUrl}
                        </a>
                    </div>
                    <div className={st.desc}>{fromComp ? "" : descJSX}</div>
                </div>
            </Container>
        </Section>
    );
};

export default WorkDetailSection;

import type { WorkType } from "../../works";
import Container from "../Container";
import Heading from "../Heading";
import Section from "../Section";
import st from "./WorkDetailSection.module.scss";

const WorkDetailSection = (props: { work: WorkType }) => {
    const { name, img, siteUrl, fromComp, type, duration_day, descJSX, isPortfolio } = props.work;

    return (
        <Section bgBlack={false} id="">
            <Container>
                <Heading jaText={type} enText={name} upperCase={false} />
                <div className={st.duration}>制作期間: {duration_day ? <time dateTime={`${duration_day}d`}>{duration_day}日間</time> : "未計測"}</div>
                <p className={st.subText}>{fromComp ? "無料で公開していただいているデザインカンプを元に作成させていただきました。" : isPortfolio ? "" : "chatGPTに架空のクライアントになってもらい、その依頼に対応する形で作成しました。"}</p>
                <div className={st.contents}>
                    <div className={st.imgAndLink}>
                        <a className={st.link} href={siteUrl} target="_blank">
                            <img className={st.img} src={img} alt="" />
                            <p className={st.url}>{siteUrl}</p>
                        </a>
                    </div>
                    <div className={st.desc}>{descJSX}</div>
                </div>
            </Container>
        </Section>
    );
};

export default WorkDetailSection;

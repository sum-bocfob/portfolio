import Container from "../Container";
import Heading from "../Heading";
import Section from "../Section";
import st from "./WorkDetialSection.module.scss";

import works from "../../works";
import { useParams } from "react-router-dom";

const WorkDetailSection = () => {
    const { id } = useParams<{ id: string }>();
    const work = works.find((work) => work.pageUrl.split("/").at(-1) === id);

    if (!work) {
        return <p>該当する制作物が見つかりません</p>;
    }

    const { name, img, siteUrl, fromComp, type } = work;

    return (
        <Section bgBlack={false} id="">
            <Container>
                <Heading jaText={type} enText={name} />
                <p className={st.subText}>{fromComp ? "" : "chatGPTに架空のクライアントになってもらい、その依頼に対応する形で作成しました。"}</p>
                <div>
                    <div>
                        <img src={img} alt="" />
                        <a href={siteUrl} target="_blank">
                            {siteUrl}
                        </a>
                    </div>
                    <p>testse</p>
                </div>
            </Container>
        </Section>
    );
};

export default WorkDetailSection;

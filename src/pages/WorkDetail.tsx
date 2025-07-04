import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WorkDetailSection from "../components/WorkDetailSection";

import works from "../works";
import UsedSkills from "../components/UsedSkills";
import Works_Mini from "../components/Works_Mini";

function WorkDetail() {
    const { id } = useParams<{ id: string }>();
    const work = works.find((work) => work.pageUrl.split("/").at(-1) === id);

    if (!work) {
        return <p>該当する制作物が見つかりません</p>;
    }

    return (
        <>
            <title>{`${work.name}(制作物) | 久野拓也のポートフォリオ`}</title>
            <meta name="description" content={`制作した${work.name}の詳細ページ`} />

            <Header />
            <WorkDetailSection work={work} />
            <UsedSkills work={work} />
            <Works_Mini curWork={work} />
            <Footer />
        </>
    );
}

export default WorkDetail;

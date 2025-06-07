import st from "./Work.module.scss";
import { type WorkType } from "../../works";
import newTabIcon from "../../assets/newPage.svg";

const Work = ({ name, img, pageUrl, siteUrl, fromComp }: WorkType) => {
    return (
        <li className={st.item}>
            <a className={st.pageLink} href={pageUrl}>
                <div className={st.imgWrapper}>
                    <img className={st.thumbnail} src={img} alt={`${name}のサムネイル`} />
                </div>
                <h3 className={fromComp ? st.note : "tes"}>{name}</h3>
            </a>
            <a className={st.siteLink} href={siteUrl} target="_blank">
                <img src={newTabIcon} alt="" className={st.siteIcon}></img>
            </a>
        </li>
    );
};

export default Work;

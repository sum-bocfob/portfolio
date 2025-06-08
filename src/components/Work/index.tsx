import st from "./Work.module.scss";
import { type WorkType } from "../../works";
import newTabIcon from "../../assets/newPage.svg";
import { Link } from "react-router-dom";

const Work = ({ name, img, pageUrl, siteUrl, fromComp }: WorkType) => {
    return (
        <li className={st.item}>
            <Link className={st.pageLink} to={pageUrl}>
                <div className={st.imgWrapper}>
                    <img className={st.thumbnail} src={img} alt={`${name}のサムネイル`} />
                </div>
                <h3 className={fromComp ? st.note : ""}>{name}</h3>
            </Link>
            <a className={st.siteLink} href={siteUrl} target="_blank">
                <img src={newTabIcon} alt="" className={st.siteIcon}></img>
            </a>
        </li>
    );
};

export default Work;

import st from "./OpenAnimation.module.scss";

import { useEffect } from "react";

const OpenAnimation = () => {
    useEffect(() => {
        return () => {
            sessionStorage.setItem("loaded", "loaded");
        };
    }, []);

    if (sessionStorage.getItem("loaded")) {
        return;
    }

    return (
        <>
            <div className={`${st.openAnim} ${st.third}`}></div>
            <div className={`${st.openAnim} ${st.second}`}></div>
            <div className={`${st.openAnim} ${st.first}`}></div>
        </>
    );
};

export default OpenAnimation;

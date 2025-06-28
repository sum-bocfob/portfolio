import st from "./OpenAnimation.module.scss";

import React from "react";

const OpenAnimation = () => {
    return (
        <>
            <div className={`${st.openAnim} ${st.third}`}></div>
            <div className={`${st.openAnim} ${st.second}`}></div>
            <div className={`${st.openAnim} ${st.first}`}></div>
        </>
    );
};

export default OpenAnimation;

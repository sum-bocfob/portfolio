import st from "./Section.module.scss";

import React from "react";

type Prop = {
    bgBlack: boolean;
    children: React.ReactNode;
};

const Section = ({ bgBlack, children }: Prop) => {
    return <section className={`${st.section} ${bgBlack ? st.black : st.white}`}>{children}</section>;
};

export default Section;

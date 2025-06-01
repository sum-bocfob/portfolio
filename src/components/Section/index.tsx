import st from "./Section.module.scss";

import React from "react";

type Prop = {
    bgBlack: boolean;
    id: string;
    children: React.ReactNode;
};

const Section = ({ bgBlack, id, children }: Prop) => {
    return (
        <section id={id} className={`${st.section} ${bgBlack ? st.black : st.white}`}>
            {children}
        </section>
    );
};

export default Section;

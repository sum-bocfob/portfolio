import st from "./Grid.module.scss";

import React from "react";

type Prop = {
    colNum: number;
    children: React.ReactNode;
};

const Grid = ({ colNum, children }: Prop) => {
    return <ul className={`${st["grid" + colNum]} ${st.grid}`}>{children}</ul>;
    // return <div className={`${st.grid}${colNum}`}>{children}</div>;
};

export default Grid;

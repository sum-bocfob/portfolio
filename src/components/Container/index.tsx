import React from "react";
import st from "./Container.module.scss";

type Props = {
    children: React.ReactNode;
};

const Container = ({ children }: Props) => {
    return <div className={st.container}>{children}</div>;
};

export default Container;

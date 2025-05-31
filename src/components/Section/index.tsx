import "./Section.scss";

import React from "react";

type Prop = {
    children: React.ReactNode;
};

const Section = ({ children }: Prop) => {
    return <section>{children}</section>;
};

export default Section;

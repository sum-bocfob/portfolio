import "./Heading.scss";

import React from "react";

type Prop = {
    jaText: string;
    enText: string;
};

const Heading = ({ jaText, enText }: Prop) => {
    return (
        <hgroup>
            <p>{jaText}</p>
            <h2 className="upperCase">{enText}</h2>
        </hgroup>
    );
};

export default Heading;

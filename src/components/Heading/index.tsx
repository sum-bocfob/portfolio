import st from "./Heading.module.scss";

type Prop = {
    jaText: string;
    enText: string;
};

const Heading = ({ jaText, enText }: Prop) => {
    return (
        <hgroup className={st.heading}>
            <p>{jaText}</p>
            <h2 className="upperCase">{enText}</h2>
        </hgroup>
    );
};

export default Heading;

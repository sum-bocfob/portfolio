import Container from "../Container";
import Heading from "../Heading";
import Section from "../Section";
import st from "./Profile.module.scss";

import img from "../../assets/profile.jpg";

const Profile = () => {
    return (
        <Section id="profile" bgBlack={false}>
            <Container>
                <Heading jaText="プロフィール" enText="Profile" />

                <div className={st.profile_texts}>
                    <dl className={st.profile_desc_list}>
                        <dt>久野 拓也</dt>
                        <div>
                            <dd aria-hidden="true">TAKUYA HISANO</dd>
                            <dd className={st.birth}>
                                <time dateTime="1993-11-08">1993/11/08</time>
                            </dd>
                        </div>
                        <dd className={st.img}>
                            <img src={img} alt="3DCGソフトBlenderで作成した私のアバター" width={420} height={300} />
                        </dd>
                    </dl>
                    <p>
                        独学でWebサイト制作を勉強した後、基礎から学びなおすため、職業訓練に参加。
                        <br />
                        訓練以外でも、意欲的に様々な知識、技術を勉強中。
                        <br />
                        趣味は3DCG制作。
                    </p>
                </div>
            </Container>
        </Section>
    );
};

export default Profile;

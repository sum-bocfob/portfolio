import Container from "../Container";
import Heading from "../Heading";
import Section from "../Section";
import st from "./Profile.module.scss";

import myImg from "../../assets/profile1.jpg";
import lv1Img from "../../assets/lv1_logo.gif";

const Profile = () => {
    return (
        <Section id="profile" bgBlack={false}>
            <Container>
                <Heading jaText="プロフィール" enText="Profile" delay={1} />

                <div className={st.profile_texts}>
                    <div className={st.profile_desc_list}>
                        <h3>久野 拓也</h3>
                        <div>
                            <p aria-hidden="true">TAKUYA HISANO</p>
                            <p className={st.birth}>
                                <time dateTime="1993-11-08">1993/11/08</time>
                            </p>
                        </div>
                        <div className={st.myImageWrapper}>
                            <div>
                                <img className={st.myImage} src={myImg} alt="3DCGソフトBlenderで作成した私のアバター" width={420} height={300} />
                                <img className={st.qualification} src={lv1Img} alt="HTML5プロフェッショナル認定試験ロゴ" />
                            </div>
                        </div>
                    </div>
                    <div className={st.profile_desc}>
                        <p>フロントエンドエンジニアおよびマークアップエンジニア志望。</p>
                        <p>
                            独学でWebサイト制作を勉強した後、基礎から学びなおすため、職業訓練に参加。
                            <br />
                            訓練以外でも意欲的に、ReactやTypeScriptなど、様々な知識・技術を勉強中。
                            <br />
                            趣味は3DCG制作。
                            <br />
                        </p>
                        <p>
                            <time dateTime="2025-06-16">2025年6月16日</time> 「HTML5プロフェッショナル認定 レベル1」合格
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Profile;

import Footer from "../components/Footer";
import Header from "../components/Header";
import OpenAnimation from "../components/OpenAnimation";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Works from "../components/Works";

function Home() {
    return (
        <>
            <title>久野拓也のポートフォリオ</title>
            <meta name="description" content="久野拓也のポートフォリオサイトです。フロントエンドエンジニアを目指して就職活動中です。" />
            <OpenAnimation />
            <Header />
            <Profile />
            <Skills />
            <Works />
            <Footer />
        </>
    );
}

export default Home;

import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Works from "../components/Works";

function Home() {
    return (
        <>
            <title>久野拓也のポートフォリオ</title>
            <Header />
            <Profile />
            <Skills />
            <Works />
            <Footer />
        </>
    );
}

export default Home;

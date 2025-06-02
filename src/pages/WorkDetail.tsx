import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WorkDetailSection from "../components/WorkDetailSection";

function WorkDetail() {
    const { id } = useParams<{ id: string }>();
    return (
        <>
            <Header />
            <WorkDetailSection />
            <Footer />
        </>
    );
}

export default WorkDetail;

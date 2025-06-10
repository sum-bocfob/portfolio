import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WorkDetail from "./pages/WorkDetail";
import ScrollToTop from "./components/ScrollToTop";
// import Works from "./pages/Works";

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work_detail/:id" element={<WorkDetail />} />
            </Routes>
        </>
    );
}

export default App;

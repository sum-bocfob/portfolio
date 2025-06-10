import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WorkDetail from "./pages/WorkDetail";
import ScrollToTop from "./components/ScrollToTop";
// import Works from "./pages/Works";

function App() {
    return (
        <>
            <link rel="icon" href="./src/assets/my_favicon-white.svg" />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work_detail/:id" element={<WorkDetail />} />
            </Routes>
        </>
    );
}

export default App;

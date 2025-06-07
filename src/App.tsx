import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WorkDetail from "./pages/WorkDetail";
// import Works from "./pages/Works";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work_detail/:id" element={<WorkDetail />} />
        </Routes>
    );
}

export default App;

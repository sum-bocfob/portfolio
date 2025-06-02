import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WorkDetail from "./pages/WorkDetail";
// import Works from "./pages/Works";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/works" element={<Works />} /> */}
                <Route path="/work_detail/:id" element={<WorkDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

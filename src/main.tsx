import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./destyle.scss";
import "./index.scss";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename="/portfolio">
            <App />
        </BrowserRouter>
    </StrictMode>
);

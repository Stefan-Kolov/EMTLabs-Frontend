import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./ui/components/layout/Layout/Layout.jsx";
import HomePage from "./ui/pages/HomePage/HomePage.jsx";
import AccommodationsPage from "./ui/pages/AccommodationsPage/AccommodationsPage.jsx";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="accommodations" element={<AccommodationsPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default App

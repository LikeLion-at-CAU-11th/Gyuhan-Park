import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mypage" element={<MyPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "../Pages/Feed/Feed";

const Router = () => {
    <BrowserRouter>
        <Routes>
            <Route index element={<Feed/>}/>
        </Routes>
    </BrowserRouter>
};

export default Router;
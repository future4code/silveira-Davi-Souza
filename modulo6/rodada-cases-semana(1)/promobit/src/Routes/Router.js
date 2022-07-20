import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "../Pages/Details/Details";
import Feed from "../Pages/Feed/Feed";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={ <Details/> }/>
                <Route path="/feed" element={ <Feed/> }/>
            </Routes>
        </BrowserRouter>
    );  
};

export default Router;
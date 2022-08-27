import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddressEdit from "../Pages/addressEdit/AddressEdit";
import Cart from "../Pages/cart/cart";
import Feed from "../Pages/feed/feed";
import Login from "../Pages/login/login";
import Profile from "../Pages/profile/profile";
import ProfileEdit from "../Pages/profileEdit/profileEdit";
import Restaurant from "../Pages/restaurant/restaurant";
import Signup from "../Pages/signup/signUp";
import SignupAdress from "../Pages/signupAdress/signupAdress";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>    
                <Route index element={<Feed/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/signup/adress" element={<SignupAdress/>}/>
                <Route path="/addressEdit" element={<AddressEdit/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/feed/:restaurantId" element={<Restaurant/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/profile/:id" element={<ProfileEdit/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
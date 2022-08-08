import React from "react";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";

const Profile = () => {
    return (
        <div>
            <Header back/>
            <Menu page={"profile"}/>
        </div>
    );
};

export default Profile;
export const goToLogin = (navigate) => {
    navigate("/login");
};

export const goToSignup = (navigate) => {
    navigate("/signup");
};

export const goToBack = (navigate) => {
    navigate(-1);
};

export const goToRestaurant = (navigate, id) => {
    navigate(`/feed/${id}`);
};

export const goToSignupAdress = (navigate) => {
    navigate("/signup/adress");
};

export const goToFeed = (navigate) => {
    navigate("/");
};
import { useNavigate } from "react-router-dom";

export const goToDetails = (navigate, pageIndex) => {
    navigate(pageIndex); 
};

export const goToFeed = () => {
    const navigate = useNavigate();
    navigate('/'); 
};
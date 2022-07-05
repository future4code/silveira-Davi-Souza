import UserBusiness from "./business/UserBusiness";
import app from "./controller/app";
import UserController from "./controller/UserController";
import UserData from "./data/UserData";

const userController = new UserController(
    new UserBusiness(
        new UserData()
    )
);

app.post("/signup", userController.signup);
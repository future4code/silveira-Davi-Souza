import UserBusiness from "./business/UserBusiness";
import app from "./controller/app";
import UserController from "./controller/UserController";
import UserData from "./data/UserData";
import authenticator from "./services/authenticator";
import hashManager from "./services/hashManager";
import idGenerator from "./services/idGenerator";

const userController = new UserController(
    new UserBusiness(
        new UserData(),
        new idGenerator(),
        new hashManager(),
        new authenticator()
    )
);

app.post("/signup", userController.signup);
app.post("/login", userController.login);
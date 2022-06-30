import app from "./app";
import createRecipe from "./endpoints/createRecipe";
import getRecipe from "./endpoints/getRecipe";
import login from "./endpoints/login";
import signup from "./endpoints/signup";
import userProfile from "./endpoints/userProfile";

app.post("/signup", signup);
app.post("/login", login);
app.get("/user/profile", userProfile);

app.post("/recipe", createRecipe);
app.get("/recipe/:id", getRecipe);
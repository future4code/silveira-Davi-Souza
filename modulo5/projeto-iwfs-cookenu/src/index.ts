import app from "./app";
import createRecipe from "./endpoints/createRecipe";
import followUser from "./endpoints/followUser";
import getFeedRecipes from "./endpoints/getFeedRecipes";
import getRecipe from "./endpoints/getRecipe";
import login from "./endpoints/login";
import signup from "./endpoints/signup";
import unfollowUser from "./endpoints/unfollowUser";
import userProfile from "./endpoints/userProfile";

app.post("/signup", signup);
app.post("/login", login);
app.get("/user/profile", userProfile);

app.post("/recipe", createRecipe);
app.get("/recipe/:id", getRecipe);

app.post("/user/follow", followUser);
app.post("/user/unfollow", unfollowUser);
app.get("/user/feed", getFeedRecipes);
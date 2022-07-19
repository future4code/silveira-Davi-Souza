import { app } from "./app";
import getDataUser from "./endpoints/getDataUser";
import login from "./endpoints/login";
import singup from "./endpoints/singup";

app.post('/user/signup', singup);
app.get('/user/profile/:token', getDataUser);
app.post('/user/login', login); 
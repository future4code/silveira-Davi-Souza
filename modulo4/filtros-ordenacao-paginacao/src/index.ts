import { app } from "./app";
import { getAllUsersFilters } from "./endpoints/getAllUsersFilters";
import { getLimitUsers } from "./endpoints/getLimitUsers";
import { getUserByName } from "./endpoints/getUserByName";
import { getUserByType } from "./endpoints/getUserByType";
import { getUsersOrder } from "./endpoints/getUsersOrder";

app.get("/users/name", getUserByName);

app.get("/users/type", getUserByType);

app.get("/users/order", getUsersOrder);

app.get("/users/page", getLimitUsers);

app.get("/users/filters", getAllUsersFilters);
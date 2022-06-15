import { app } from "./app";
import { getAddress } from "./endpoints/getAddress";
import { insertAdress } from "./endpoints/insertAdress";

app.post("/user", insertAdress);

app.get("/endereco/:cep", getAddress);



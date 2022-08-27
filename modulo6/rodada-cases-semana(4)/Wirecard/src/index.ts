import app from "./controller/app";
import BuyerController from "./controller/BuyerController";
import ClientController from "./controller/ClientController";
import PaymentController from "./controller/PaymentController";

const controllerbuy = new BuyerController();
const controllerClient= new ClientController();
const controllerPayment= new PaymentController();

app.post("/client", controllerClient.addClient);
app.post("/buyer", controllerbuy.addBuy);
app.post("/payment/:client_id/:buyer_id", controllerPayment.createPayment);
app.get("/payment/:payment_id", controllerPayment.getPaymentId);
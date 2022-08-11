import PaymentModel, { inputPayment, paymentStatus, TypePayment } from "./../models/PaymentModel";
import PaymentDatabase from "../data/PaymentDatabase";
import { IdGenerator } from "../services/IdGenerator";
import ClientDatabase from "../data/ClientDatabase";
import BuyDatabase from "../data/BuyDatabase";
import { CustomError } from "../error/BaseCustomError";

class PaymentBusiness {
    constructor(
        private idGenerator = new IdGenerator(),
        private paymentData = new PaymentDatabase(),
        private clientData = new ClientDatabase(),
        private buyData = new BuyDatabase()
    ){};

    public generatePayment = async(input: inputPayment) => {
        try {
            const {client_id, buyer_id, amount, type} = input;
            let {status, boleto_number} = input;

            const validClient = await this.clientData.getID(client_id);

            if(!validClient){
                throw new CustomError(404, "This Client doesn't exist");
            };

            const validBuy = await this.buyData.getByID(buyer_id);

            if(!validBuy){
                throw new CustomError(404, "This Buyer doesn't exist");
            };

            if(!client_id ||  !buyer_id || !amount || !type ){
                throw new CustomError(422, "fields is empty");
            };

            if(type !== TypePayment.BOLETO && type !== TypePayment.CARD) {
                throw new CustomError(422, "Invalid type");
            };

            if(!status){
                status = paymentStatus.A_PAGAR;
            };

            if(type === TypePayment.CARD){
                status = paymentStatus.PAGO;
                boleto_number = null;
            };

            if(type === TypePayment.BOLETO){
                boleto_number = Date.now();
            };
            
            const id = this.idGenerator.generate();

            const newPayment = new PaymentModel(
                id,
                client_id,
                buyer_id,
                amount,
                type,
                status,
                boleto_number
            );
            

            await this.paymentData.generatePayment(newPayment);

            return newPayment;
        } 
        catch (error: any) {
            throw new CustomError(400, error.message);
        };
    };

    public getPaymentById = async(id: string) => {
        try {
            const result = await this.paymentData.getPaymentId(id);

            if(!result){
                throw new CustomError(404, "Payment not found");
            };

            return (result);
        } 
        catch (error: any) {
            throw new CustomError(400, error.message);
        };
    };
};

export default PaymentBusiness;
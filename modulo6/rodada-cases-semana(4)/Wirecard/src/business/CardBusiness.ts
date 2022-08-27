import BuyDatabase from "../data/BuyDatabase";
import CardDatabase from "../data/CardDatabase";
import PaymentDatabase from "../data/PaymentDatabase";
import { CustomError } from "../error/BaseCustomError";
import { validCards } from "../mocks/ValidCardsMock";
import CardModel, { inputCard } from "../models/CardModel";
import PaymentModel, { inputPayment, paymentStatus } from "../models/PaymentModel";
import { IdGenerator } from "../services/IdGenerator";

export default class CardBusiness {
    constructor(
        private idGenerator = new IdGenerator(),
        private cardData = new CardDatabase(),
        private buyData = new BuyDatabase(),
        private paymentData = new PaymentDatabase()
    ){}

    public addCard = async (input: inputCard, inputPay: inputPayment) => {
        const {buyer_id, card_holder,card_number, card_expiration_date, card_cvv} = input;
        const {client_id, type, amount} = inputPay;
        let {status} = inputPay;

        const [month, year] = card_expiration_date.split("/");
        const card_expirationFormat = new Date(`${year}-${month}-01`);

        if(!buyer_id || !card_holder || !card_number || !card_expiration_date || !card_cvv){
            throw new CustomError(422, "Fill in all the fields");
        };

        if(!card_expiration_date.includes("/") || card_expiration_date.length !== 7){
            throw new CustomError(400, "Invalid card expiration date format");
        };

        if(card_cvv.toString().length !== 3){
            throw new CustomError(400, "Invalid CVV format");
        };

        if(card_number.toString().length !== 16){
            throw new CustomError(400, "Not valid card number format");
        };

        const validBuy = await this.buyData.getByID(buyer_id);

        if(!validBuy){
            throw new CustomError(404, "Buy don't match the card owner");
        };
        
        if(card_expirationFormat.getTime() < Date.now()){
            const id = this.idGenerator.generate();
            status = paymentStatus.A_PAGAR;
            const newPayment = new PaymentModel(
                id,
                client_id,
                buyer_id,
                amount,
                type,
                status
            );
            await this.paymentData.generatePayment(newPayment);
            throw new CustomError(400, "Expired card");
        };

        if(!validCards.includes(card_cvv)){
            const id = this.idGenerator.generate();
            status = paymentStatus.A_PAGAR;
            const newPayment = new PaymentModel(
                id,
                client_id,
                buyer_id,
                amount,
                type,
                status
            );
            await this.paymentData.generatePayment(newPayment);
            throw new CustomError(401, "Payment not authorized");
        }
        else{

            const id = this.idGenerator.generate();
            
            const newCard = new CardModel(
                id,
                buyer_id,
                card_holder,
                card_number,
                card_expirationFormat,
                card_cvv
            );

            await this.cardData.addCard(newCard);
            return ({message: "Payment authorized"});
        };
    };
};
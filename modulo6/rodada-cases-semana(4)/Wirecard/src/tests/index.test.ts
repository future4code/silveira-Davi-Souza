import { inputCard } from "../models/CardModel";
import { inputPayment, paymentStatus, TypePayment } from "../models/PaymentModel";
import { BuyDatabaseMock } from "../mocks/BuyDatabaseMock";
import { PaymentDataMock } from "../mocks/PaymentDatabaseMock";
import PaymentBusiness from "../business/PaymentBusiness";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { ClientDataMock } from "../mocks/ClientDataMock";
import CardBusiness from "../business/CardBusiness";
import { CardDatabaseMock } from "../mocks/CardDatabaseMock";


const paymentBusinessMock = new PaymentBusiness(
    new IdGeneratorMock,
    new PaymentDataMock as any,
    new ClientDataMock as any,
    new BuyDatabaseMock as any
)

const cardBusinessMock = new CardBusiness(
    new IdGeneratorMock,
    new CardDatabaseMock as any,
    new BuyDatabaseMock as any,
    new PaymentDataMock as any
)


describe("Paymenttests", () => {
    test("Test getId, not payment", async () => {
        expect.assertions(1)
        try {
            await paymentBusinessMock.getPaymentById("test");
        }
        catch (error: any) {
            expect(error.message).toBe("Payment not found");
        };
    })
    test("Test generatePayment, client no found", async() => {
        expect.assertions(1)
        try {
            const client: inputPayment = {
                client_id: "",
                buyer_id: "buyer_id",
                amount: 345,
                type: TypePayment.BOLETO,
                status: paymentStatus.A_PAGAR,
                boleto_number: 786578190
            }
            await paymentBusinessMock.generatePayment(client)
        } catch (error: any) {
            expect(error.message).toBe("This Client doesn't exist")
        }
    })
    test("Test generatePayment, buy not found", async() => {
        expect.assertions(1)
        try {
            const client: inputPayment = {
                client_id: "id_mock",
                buyer_id: "",
                amount: 986,
                type: TypePayment.BOLETO,
                status: paymentStatus.A_PAGAR,
                boleto_number: 734596107
            }
            await paymentBusinessMock.generatePayment(client)
        } catch (error: any) {
            expect(error.message).toBe("This Buyer doesn't exist")
        }
    })
    test("Test generatePayment, invalid field", async() => {
        expect.assertions(1)
        try {
            const client: inputPayment  = {
                client_id: "id_mock",
                buyer_id: "id_mock1",
                amount: 0,
                type: TypePayment.BOLETO,
                status: paymentStatus.A_PAGAR,
                boleto_number: 734596107
            }
            await paymentBusinessMock.generatePayment(client)
        } catch (error: any) {
            expect(error.message).toBe("fields is empty")
        }
    })
})

describe("Card table tests", () => {
    test("Test addCard, buyer doens't exist", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCard = {
                buyer_id: "id_mock",
                card_holder: "holder name",
                card_number: 7895473452876689,
                card_expiration_date: "02/2028",
                card_cvv: 123
            }
            const clientPay: inputPayment = {
                client_id: "id_mock",
                buyer_id: "id_mock",
                amount: 150,
                type: TypePayment.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Buy don't match the card owner")
        }
    })
    test("Test addCard, missing field", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCard = {
                buyer_id: "id_mock1",
                card_holder: "",
                card_number: 7895473452876689,
                card_expiration_date: "02/2026",
                card_cvv: 986
            }
            const clientPay: inputPayment = {
                client_id: "id_mock",
                buyer_id: "id_mock1",
                amount: 456,
                type: TypePayment.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Fill in all the fields")
        }
    })
    test("Test addCard, invalid card expiration date", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCard = {
                buyer_id: "id_mock1",
                card_holder: "holder name",
                card_number: 7895473452876689,
                card_expiration_date: "02/26",
                card_cvv: 986
            }
            const clientPay: inputPayment = {
                client_id: "id_mock",
                buyer_id: "id_mock1",
                amount: 456,
                type: TypePayment.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Invalid card expiration date format")
        }
    })
    test("Test addCard, invalid cvv format", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCard = {
                buyer_id: "id_mock1",
                card_holder: "holder name",
                card_number: 7895473452876689,
                card_expiration_date: "02/2026",
                card_cvv: 6548
            }
            const clientPay: inputPayment = {
                client_id: "id_mock",
                buyer_id: "id_mock1",
                amount: 456,
                type: TypePayment.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Invalid CVV format")
        }
    })
    test("Test addCard, invalid card format", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCard = {
                buyer_id: "id_mock1",
                card_holder: "holder name",
                card_number: 456,
                card_expiration_date: "02/2026",
                card_cvv: 986
            }
            const clientPay: inputPayment = {
                client_id: "id_mock",
                buyer_id: "id_mock1",
                amount: 456,
                type: TypePayment.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Not valid card number format")
        }
    })
    test("Test addCard, expired card", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCard = {
                buyer_id: "id_mock1",
                card_holder: "holder name",
                card_number: 7895473452876689,
                card_expiration_date: "02/2018",
                card_cvv: 986
            }
            const clientPay: inputPayment = {
                client_id: "id_mock",
                buyer_id: "id_mock1",
                amount: 456,
                type: TypePayment.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Expired card")
        }
    })
    test("Test addCard, not authorized", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCard = {
                buyer_id: "id_mock1",
                card_holder: "holder name",
                card_number: 7895473452876689,
                card_expiration_date: "02/2026",
                card_cvv: 986
            }
            const clientPay: inputPayment = {
                client_id: "id_mock",
                buyer_id: "id_mock1",
                amount: 456,
                type: TypePayment.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Payment not authorized")
        }
    })
})
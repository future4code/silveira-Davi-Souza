import { TypePayment,  paymentStatus } from "../models/PaymentModel";
import PaymentModel from "../models/PaymentModel";

export const paymentMock1 = new PaymentModel(
    "id_mock",
    "haw",
    "buy_mock",
    986,
    TypePayment.BOLETO,
    paymentStatus.A_PAGAR,
    789456123
);

export const paymentMock2 = new PaymentModel(
    "id_mock2",
    "hawhaw",
    "buy_mock2",
    345,
    TypePayment.CARD,
    paymentStatus.PAGO
);
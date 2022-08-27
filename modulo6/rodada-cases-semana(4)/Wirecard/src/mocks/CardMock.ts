import CardModel from "../models/CardModel";

const mockDate = new Date("2022-09-23T00:00:00.000Z");

export const cardMock = new CardModel( "id_mock1", "buyer_id1", "haw", 3622768698787421, mockDate, 986);

export const cardMock2 = new CardModel( "id_mock2", "buyer_id2", "hawhaw", 7895473452876689, mockDate, 345);
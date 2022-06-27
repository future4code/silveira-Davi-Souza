import { connection } from "./connection";

export default async function selectUsersOrder ( order: string ): Promise<any> {
    const result = await connection("aula49_exercicio")
        .select("*")
        .orderBy(order, "ASC");

    return result;
};
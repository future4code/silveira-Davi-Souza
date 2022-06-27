import { connection } from "../data/connection";

export default async function selectUserByType ( type: string ): Promise<any> {
    const result = await connection("aula49_exercicio")
        .select("*")
        .where("type", type);

    return result;
};
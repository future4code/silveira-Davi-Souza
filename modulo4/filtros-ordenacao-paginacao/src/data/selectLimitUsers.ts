import { connection } from "../data/connection";

export default async function selectLimitUsers (offset: number): Promise<any> {
    const result = await connection("aula49_exercicio")
        .select("*")
        .limit(5)
        .offset(offset);

    return result;
};
import { connection } from "../data/connection";

export default async function selectAllUsersFilter( 
    filter: string, 
    typeFilter: string, 
    compare: string, 
    order: string,
    offset: number
    ):Promise<any> {
    const result = await connection("aula49_exercicio")
    .select("*")
    .where(typeFilter, compare, `${filter}`)
    .orderBy(order, "DESC")
    .limit(5)
    .offset(offset);

    return result;
};
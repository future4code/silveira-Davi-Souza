import connection from "./connection";

export const getUser = async ( email: string ): Promise<any> => {
    const result = await connection("user")
        .select("*")
        .where({ email });

    return result[0];
}; 
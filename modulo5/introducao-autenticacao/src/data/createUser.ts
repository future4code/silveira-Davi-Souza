import connection from "./connection";

export const createUser = async ( id: string, email: string, password: string ): Promise<any> => {
    await connection("user")
        .insert({
            id,
            email,
            password,
        });
};
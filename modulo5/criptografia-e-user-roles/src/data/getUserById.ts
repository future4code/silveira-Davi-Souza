import connection from "./connection";

const getUserById = async (id: string): Promise<any> => {
    const result = await connection("user")
      .select("*")
      .where({ id });

    return result[0];
};

export default getUserById; 
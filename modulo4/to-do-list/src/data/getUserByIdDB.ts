import connection from "./connection";

const getUserByIdDB = async (id: string): Promise<any> => {
    const result = await connection("ToDoListUser")
        .select("id", "nickname")
        .where("id", id);
        
    return result[0];
};

export default getUserByIdDB;
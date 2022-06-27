import connection from "./connection";

type Task = {
    title : string,
	description: string,
	limitDate: string,
	creatorUserId: string
}

const createTaskDB =async (body: Task): Promise<any> => {
    await connection("ToDoListTask")
        .insert({
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: body.title,
            description: body.description,
            limit_date: body.limitDate,
            creator_user_id: body.creatorUserId
        });
};

export default createTaskDB;
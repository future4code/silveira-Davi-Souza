class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ){};

    public getId () {
        return this.id;
    };

    public getName () {
        return this.name;
    };

    public getEmail () {
        return this.email;
    };

    public getPassword () {
        return this.password
    };

    static toUserMode = (input: any): User => {
        return new User(input.id, input.name, input.email, input.password);
    };
};

export default User;
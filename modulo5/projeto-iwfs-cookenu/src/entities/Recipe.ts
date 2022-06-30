class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private creationDate: Date,
        private userId: string
    ) {};

    public getId () {
        return this.id;
    };

    public getTitle () {
        return this.title;
    };

    public getDescription () {
        return this.description;
    };

    public getCreationDate () {
        return this.creationDate;
    };

    public getUserId () {
        return this.userId;
    };

    static toRecipeMode (data: any): Recipe {
        return new Recipe(data.id, data.title, data.description, data.creation_date, data.user_id);
    };

};

export default Recipe;
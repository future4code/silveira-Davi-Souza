class Product {
    constructor(
        private id: number,
        private name: string,
        private tags: string[],
        private author_id: string
    ){};

    public getId () {
        return this.id;
    };

    public getName () {
        return this.name;
    };

    public getTags () {
        return this.tags;
    };

    public getAuthorId () {
        return this.author_id;
    };

    static toProductMode = (input: any, tags: []): Product => {
        return new Product(input.id, input.name, tags, input.author_id);
    };
};

export default Product;
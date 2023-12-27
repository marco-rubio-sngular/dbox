import Tag from '../../Domain/Model/Tag';

class TagListResponse {
    constructor(public readonly list: Tag[]) {}

    toPrimitives(): {
        id: string;
        title: string;
        value: string;
        createdAt: Date;
    }[] {
        return this.list.map((item) => {
            return item.toPrimitives();
        });
    }
}

export default TagListResponse;

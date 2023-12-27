import Faq from '../../Domain/Model/Faq';

class FaqListResponse {
    constructor(public readonly list: Faq[]) {}

    toPrimitives(): {
        id: string;
        title: string;
        solution: string;
        createdAt: Date;
    }[] {
        return this.list.map((item) => {
            return item.toPrimitives();
        });
    }
}

export default FaqListResponse;

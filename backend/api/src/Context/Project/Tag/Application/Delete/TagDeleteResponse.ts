class TagDeleteResponse {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly value: string,
        public readonly createdAt: Date
    ) {}
}

export default TagDeleteResponse;

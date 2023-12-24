class TagCreateRequest {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly value: string
    ) {}
}

export default TagCreateRequest;

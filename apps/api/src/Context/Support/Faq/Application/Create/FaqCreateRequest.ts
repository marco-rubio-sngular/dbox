class FaqCreateRequest {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly solution: string
    ) {}
}

export default FaqCreateRequest;

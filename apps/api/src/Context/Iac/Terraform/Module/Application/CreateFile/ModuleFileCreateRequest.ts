class ModuleFileCreateRequest {
    constructor(
        public readonly id: string,
        public readonly moduleId: string,
        public readonly title: string,
        public readonly description: string,
        public readonly filename: string,
        public readonly base64File: string
    ) {}
}

export default ModuleFileCreateRequest;

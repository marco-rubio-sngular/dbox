class ModuleListFilesRequest {
    constructor(
        public readonly moduleId: string,
        public readonly pattern?: string
    ) {}
}

export default ModuleListFilesRequest;

class RegisterResponse {
    private id: string;

    constructor(id: string) {
        this.id = id;
    }

    public getId(): string {
        return this.id;
    }

    public toPrimitives(): string | number | boolean | object {
        return 2;
    }
}

class RegisterService {
    private request: RegisterRequest;
    private users: UserRepository;

    constructor(request: RegisterRequest, users: UserRepository) {
        this.request = request;
        this.users = users;
    }

    public execute(): RegisterResponse {
        const id: string = this.generateId();

        const user: User = new User(
            id,
            this.request.getEmail(),
            this.request.getPassword()
        );

        this.users.register(user);

        return new RegisterResponse(id);
    }

    private generateId(): string {
        return 'string-con-formato-uuid';
    }
}

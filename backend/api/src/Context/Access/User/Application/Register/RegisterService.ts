import Id from '../../../../Shared/Domain/ValueObject/Id';
import User from '../../Domain/Model/User';
import { UserRepository } from '../../Domain/Persistence/UserRepository';
import Email from '../../Domain/ValueObject/Email';
import Password from '../../Domain/ValueObject/Password';
import { RegisterRequest } from './RegisterRequest';
import { RegisterResponse } from './RegisterResponse';

export class RegisterService {
    private request: RegisterRequest;
    private users: UserRepository;

    constructor(request: RegisterRequest, users: UserRepository) {
        this.request = request;
        this.users = users;
    }

    public execute(): RegisterResponse {
        const id: string = crypto.randomUUID().toString();

        const user: User = new User(
            new Id(id),
            new Email(this.request.getEmail()),
            new Password(this.request.getPassword())
        );

        this.users.register(user);

        return new RegisterResponse(id);
    }
}

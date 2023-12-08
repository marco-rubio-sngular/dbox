import User from "../Model/User";

export interface UserRepository {
    register(user: User): void;
}

import Id from '../../../../Shared/Domain/ValueObject/Id';
import Email from '../ValueObject/Email';
import Password from '../ValueObject/Password';

class User {
    constructor(
        public readonly id: Id,
        public readonly email: Email,
        public readonly password: Password
    ) {}
}

export default User;

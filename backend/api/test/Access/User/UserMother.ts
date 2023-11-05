import User from '../../../src/Context/Access/User/Domain/Model/User';
import Email from '../../../src/Context/Access/User/Domain/ValueObject/Email';
import Password from '../../../src/Context/Access/User/Domain/ValueObject/Password';
import Id from '../../../src/Context/Shared/Domain/ValueObject/Id';

class UserMother {
    static VALID_EMAIL: string = 'hola@hola.com';
    static VALID_ID: string = '30710b14-be02-4099-a3ce-bb147727b0c3';
    static VALID_PASSWORD: string = 'anypassword';

    static User(): User {
        return new User(
            UserMother.Id(),
            UserMother.Email(),
            UserMother.Password()
        );
    }

    static Email(value?: string): Email {
        return new Email(value !== undefined ? value : UserMother.VALID_EMAIL);
    }

    static Id(): Id {
        return new Id(UserMother.VALID_ID);
    }

    static Password(): Password {
        return new Password(UserMother.VALID_PASSWORD);
    }
}

export default UserMother;

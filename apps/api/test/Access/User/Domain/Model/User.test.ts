import User from '../../../../../src/Context/Access/User/Domain/Model/User';
import Email from '../../../../../src/Context/Access/User/Domain/ValueObject/Email';
import Password from '../../../../../src/Context/Access/User/Domain/ValueObject/Password';
import Id from '../../../../../src/Context/Shared/Domain/ValueObject/Id';
import UserMother from '../../UserMother';

describe('User', () => {
    it('should have an email, id and pass', () => {
        const sut: User = UserMother.User();

        expect(sut.email).toBeInstanceOf(Email);
        expect(sut.email.value).toStrictEqual(UserMother.VALID_EMAIL);
        expect(sut.id).toBeInstanceOf(Id);
        expect(sut.id.value).toStrictEqual(UserMother.VALID_ID);
        expect(sut.password).toBeInstanceOf(Password);
        expect(sut.password.value).toStrictEqual(UserMother.VALID_PASSWORD);
    });
});

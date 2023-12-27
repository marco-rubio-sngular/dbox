import BadRequestException from '../../../../../src/Context/Shared/Domain/Exception/BadRequestException';
import UserMother from '../../UserMother';

describe('Test para email', () => {
    it('should be valid', () => {
        expect(() => {
            UserMother.Email('example@example.comM');
            UserMother.Email('a@m.co');
            UserMother.Email('example1@eXample.com');
            UserMother.Email('e@ex.comv');
        }).not.toThrowError();
    });

    it('should turn off the world', () => {
        expect(() => {
            UserMother.Email('non-valid-email');
        }).toThrowError();
    });

    it('should be a domain exception', () => {
        expect(() => {
            UserMother.Email('non-valid-email');
        }).toThrow(BadRequestException);
    });
});

import Email from '../../../../../src/Context/Access/User/Domain/ValueObject/Email';
import BadRequestException from '../../../../../src/Context/Shared/Domain/Exception/BadRequestException';

describe('Test para email', () => {
    it('should exists', () => {
        expect(() => {
            new Email('example@example.com');
            new Email('a@m.co');
            new Email('example1@eXample.com');
            new Email('e@ex.comv');
        }).not.toThrowError();
    });

    it('should turn off the world', () => {
        expect(() => {
            new Email('non-valid-email');
        }).toThrowError();
    });

    it('should be a domain exception', () => {
        expect(() => {
            new Email('non-valid-email');
        }).toThrow(BadRequestException);
    });
});

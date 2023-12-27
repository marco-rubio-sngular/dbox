import BadRequestException from '../../../../Shared/Domain/Exception/BadRequestException';
import LimitedString from '../../../../Shared/Domain/ValueObject/LimitedString';

class Password extends LimitedString {
    public static MINIMUM_PASSWORD_LENGTH: number = 3;
    public static MAXIMUM_PASSWORD_LENGTH: number = 100;

    constructor(value: string) {
        super(
            value,
            Password.MINIMUM_PASSWORD_LENGTH,
            Password.MAXIMUM_PASSWORD_LENGTH
        );
    }

    protected throwException(): void {
        throw new BadRequestException(
            `invalid password must have ${Password.MINIMUM_PASSWORD_LENGTH} - ${Password.MAXIMUM_PASSWORD_LENGTH} chars length`
        );
    }
}
export default Password;

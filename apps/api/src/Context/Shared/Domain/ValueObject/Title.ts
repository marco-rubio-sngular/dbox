import BadRequestException from '../Exception/BadRequestException';
import LimitedString from './LimitedString';

class Title extends LimitedString {
    public static MINIMUM_LENGTH: number = 5;
    public static MAXIMUM_LENGTH: number = 100;

    constructor(value: string) {
        super(value);
    }

    protected throwException(): void {
        throw new BadRequestException(
            `title must be between ${LimitedString.MINIMUM_LENGTH} and ${LimitedString.MAXIMUM_LENGTH} chars length, your value its not valid: ${this.value}`
        );
    }
}

export default Title;

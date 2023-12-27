import BadRequestException from '../Exception/BadRequestException';
import LimitedString from './LimitedString';

class Description extends LimitedString {
    public static MINIMUM_LENGTH_DESCRIPTION: number = 10;
    public static MAXIMUM_LENGTH_DESCRIPTION: number = 255;

    constructor(value: string) {
        super(
            value,
            Description.MINIMUM_LENGTH_DESCRIPTION,
            Description.MAXIMUM_LENGTH_DESCRIPTION
        );
    }

    protected throwException(): void {
        throw new BadRequestException(
            `description must be between ${LimitedString.MINIMUM_LENGTH} and ${LimitedString.MAXIMUM_LENGTH} chars length, your value its not valid: ${this.value}`
        );
    }
}

export default Description;

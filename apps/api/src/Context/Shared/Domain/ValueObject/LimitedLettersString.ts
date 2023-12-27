import BadRequestException from '../Exception/BadRequestException';
import LimitedString from './LimitedString';

class LimitedLettersString {
    public static MINIMUM_LENGTH: number = 2;
    public static MAXIMUM_LENGTH: number = 20;

    constructor(
        public readonly value: string,
        public readonly minimum: number = LimitedString.MINIMUM_LENGTH,
        public readonly maximum: number = LimitedString.MAXIMUM_LENGTH
    ) {
        this.validateOrThrowException();
    }

    protected validateOrThrowException(): void {
        const ereg: RegExp = new RegExp(/^[A-Za-z]+$/);
        if (
            this.value.length >= this.minimum &&
            this.value.length <= this.maximum &&
            ereg.test(this.value)
        ) {
            return;
        }

        this.throwException();
    }

    protected throwException(): void {
        throw new BadRequestException(
            `value must be between ${LimitedString.MINIMUM_LENGTH} and ${LimitedString.MAXIMUM_LENGTH} chars length, ONLY LETTERS, your value its not valid: ${this.value}`
        );
    }
}

export default LimitedLettersString;

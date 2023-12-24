import BadRequestException from '../../../../Shared/Domain/Exception/BadRequestException';
import LimitedLettersString from '../../../../Shared/Domain/ValueObject/LimitedLettersString';

class TagTitle extends LimitedLettersString {
    public static MINIMUM_LENGTH: number = 2;
    public static MAXIMUM_LENGTH: number = 25;

    constructor(public readonly value: string) {
        super(value, TagTitle.MINIMUM_LENGTH, TagTitle.MAXIMUM_LENGTH);
    }

    protected throwException(): void {
        throw new BadRequestException(
            `invalid tag title, only letters are allowed between ${TagTitle.MINIMUM_LENGTH} and ${TagTitle.MAXIMUM_LENGTH} characters`
        );
    }
}

export default TagTitle;

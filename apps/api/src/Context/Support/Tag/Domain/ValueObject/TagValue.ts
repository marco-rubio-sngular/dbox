import BadRequestException from '../../../../Shared/Domain/Exception/BadRequestException';
import LimitedString from '../../../../Shared/Domain/ValueObject/LimitedString';

class TagValue extends LimitedString {
    public static MINIMUM_LENGTH: number = 2;
    public static MAXIMUM_LENGTH: number = 50;

    constructor(public readonly value: string) {
        super(value, TagValue.MINIMUM_LENGTH, TagValue.MAXIMUM_LENGTH);
    }

    protected throwException(): void {
        throw new BadRequestException('invalid tag value');
    }
}

export default TagValue;

import BadRequestException from '../../src/Context/Shared/Domain/Exception/BadRequestException';
import InternalException from '../../src/Context/Shared/Domain/Exception/InternalException';
import NotFoundException from '../../src/Context/Shared/Domain/Exception/NotFoundException';
import { LimitedString } from '../../src/Context/Shared/Domain/ValueObject/LimitedString';
import Title from '../../src/Context/Shared/Domain/ValueObject/Title';

class LimitedStringImp extends LimitedString {
    protected throwException(): void {
        throw new Error(this.value);
    }
}

export class SharedMother {
    public static Title(value?: string): Title {
        return new Title(
            value !== undefined
                ? value
                : 'a'.repeat(Title.MINIMUM_STANDARD_STRING)
        );
    }

    public static LimitedString(value?: string): LimitedString {
        return new LimitedStringImp(
            value !== undefined
                ? value
                : 'a'.repeat(LimitedString.MINIMUM_STANDARD_STRING)
        );
    }

    public static BadRequestException(): BadRequestException {
        return new BadRequestException();
    }
    public static NotFoundException(): NotFoundException {
        return new NotFoundException();
    }
    public static InternalException(): InternalException {
        return new InternalException();
    }
}

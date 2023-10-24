import BadRequestException from '../../src/Context/Shared/Domain/Exception/BadRequestException';
import InternalException from '../../src/Context/Shared/Domain/Exception/InternalException';
import NotFoundException from '../../src/Context/Shared/Domain/Exception/NotFoundException';
import Id from '../../src/Context/Shared/Domain/ValueObject/Id';
import { LimitedString } from '../../src/Context/Shared/Domain/ValueObject/LimitedString';
import Title from '../../src/Context/Shared/Domain/ValueObject/Title';

class LimitedStringImp extends LimitedString {
    protected throwException(): void {
        throw new Error(this.value);
    }
}

export class SharedMother {
    public static TITLE_VALUE: string = 'a'.repeat(
        LimitedString.MINIMUM_STANDARD_STRING
    );
    public static ID_VALUE: string = '8a52d7d0-6176-48d3-d077-722a6dce4b76';

    public static Id(value?: string): Id {
        return new Id(value !== undefined ? value : SharedMother.ID_VALUE);
    }

    public static Title(value?: string): Title {
        return new Title(
            value !== undefined ? value : SharedMother.TITLE_VALUE
        );
    }

    public static LimitedString(value?: string): LimitedString {
        return new LimitedStringImp(
            value !== undefined ? value : SharedMother.TITLE_VALUE
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

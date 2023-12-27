import * as crypto from 'crypto';
import BadRequestException from '../../src/Context/Shared/Domain/Exception/BadRequestException';
import InternalException from '../../src/Context/Shared/Domain/Exception/InternalException';
import NotFoundException from '../../src/Context/Shared/Domain/Exception/NotFoundException';
import Id from '../../src/Context/Shared/Domain/ValueObject/Id';
import LimitedString from '../../src/Context/Shared/Domain/ValueObject/LimitedString';
import Tags from '../../src/Context/Shared/Domain/ValueObject/Tags';
import Title from '../../src/Context/Shared/Domain/ValueObject/Title';

export class SharedMother {
    public static TITLE_VALUE: string = 'a'.repeat(
        LimitedString.MINIMUM_LENGTH
    );
    public static ID_VALUE: string = crypto.randomUUID();
    public static TAGS_VALUE: string = 'linux,arquitectura';

    public static Tags(value?: string): Tags {
        return new Tags(value !== undefined ? value : SharedMother.TAGS_VALUE);
    }

    public static Id(value?: string): Id {
        return new Id(value !== undefined ? value : SharedMother.ID_VALUE);
    }

    public static Title(value?: string): Title {
        return new Title(
            value !== undefined ? value : SharedMother.TITLE_VALUE
        );
    }

    public static LimitedString(value?: string): LimitedString {
        return new LimitedString(
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

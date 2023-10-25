import BadRequestException from '../Exception/BadRequestException';
import LimitedString from './LimitedString';

class Title extends LimitedString {
    constructor(value: string) {
        super(value);
    }

    protected throwException(): void {
        throw new BadRequestException('invalid title');
    }
}

export default Title;

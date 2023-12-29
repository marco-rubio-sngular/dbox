import path from 'path';
import BadRequestException from '../Exception/BadRequestException';

class FileName {
    constructor(public readonly value: string) {
        this.validateOrThrowException();
    }

    protected validateOrThrowException(): void {
        if (
            path.extname(this.value) !== '' ||
            this.value.endsWith('Makefile')
        ) {
            return;
        }

        this.throwException();
    }

    protected throwException(): void {
        throw new BadRequestException(
            'invalid file name, must be extension ' + this.value
        );
    }
}

export default FileName;

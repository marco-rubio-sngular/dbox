import BadRequestException from '../../../../Shared/Domain/Exception/BadRequestException';

class FaqSolution {
    public static MINIMUM_LENGTH: number = 10;

    constructor(public readonly value: string) {
        if (value.trim().length >= FaqSolution.MINIMUM_LENGTH) {
            return;
        }

        this.throwException();
    }

    protected throwException(): void {
        throw new BadRequestException('invalid faq solution');
    }
}

export default FaqSolution;

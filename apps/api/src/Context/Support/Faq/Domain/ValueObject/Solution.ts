import BadRequestException from '../../../../Shared/Domain/Exception/BadRequestException';

class Solution {
    public static MINIMUM_LENGTH: number = 10;

    constructor(public readonly value: string) {
        if (value.trim().length >= Solution.MINIMUM_LENGTH) {
            return;
        }

        this.throwException();
    }

    protected throwException(): void {
        throw new BadRequestException('invalid faq solution');
    }
}

export default Solution;

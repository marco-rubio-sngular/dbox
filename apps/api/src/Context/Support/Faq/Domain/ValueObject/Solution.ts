import BadRequestException from '../../../../Shared/Domain/Exception/BadRequestException';
import Base64Text from '../../../../Shared/Domain/ValueObject/Base64Text';

class Solution extends Base64Text {
    protected throwException(): void {
        throw new BadRequestException(
            'invalid Solution, must be a valid base64 string'
        );
    }
}

export default Solution;

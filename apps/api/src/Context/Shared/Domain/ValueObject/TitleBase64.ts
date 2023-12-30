import BadRequestException from '../Exception/BadRequestException';
import Base64Text from './Base64Text';

class TitleBase64 extends Base64Text {
    protected throwException(): void {
        throw new BadRequestException(
            'invalid TitleBase64, must be a valid base64 string'
        );
    }
}

export default TitleBase64;

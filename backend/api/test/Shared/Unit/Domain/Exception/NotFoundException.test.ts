import DomainException from '../../../../../src/Context/Shared/Domain/Exception/DomainException';
import NotFoundException from '../../../../../src/Context/Shared/Domain/Exception/NotFoundException';
import { SharedMother } from '../../../SharedMother';

const sut: NotFoundException = SharedMother.NotFoundException();

describe('NotFoundException', () => {
    it('should be an Error', () => {
        expect(sut).toBeInstanceOf(Error);
    });

    it('should be a DomainException', () => {
        expect(sut).toBeInstanceOf(DomainException);
    });
});

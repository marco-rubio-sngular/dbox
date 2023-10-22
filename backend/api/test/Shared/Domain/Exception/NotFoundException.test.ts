import DomainException from '../../../../src/Context/Shared/Domain/Exception/DomainException';
import NotFoundException from '../../../../src/Context/Shared/Domain/Exception/NotFoundException';
import { SharedMother } from '../../SharedMother';

describe('NotFoundException', () => {
    let sut: NotFoundException | null = null;

    beforeEach(() => {
        sut = SharedMother.NotFoundException();
    });
    afterEach(() => {
        sut = null;
    });

    it('should be an Error', () => {
        expect(sut).toBeInstanceOf(Error);
    });

    it('should be a DomainException', () => {
        expect(sut).toBeInstanceOf(Error);
        expect(sut).toBeInstanceOf(DomainException);
    });
});

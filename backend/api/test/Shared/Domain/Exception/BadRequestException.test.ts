import BadRequestException from '../../../../src/Context/Shared/Domain/Exception/BadRequestException';
import DomainException from '../../../../src/Context/Shared/Domain/Exception/DomainException';
import { SharedMother } from '../../SharedMother';

describe('BadRequestException', () => {
    let sut: BadRequestException | null = null;

    beforeEach(() => {
        sut = SharedMother.BadRequestException();
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

import DomainException from '../../../../src/Context/Shared/Domain/Exception/DomainException';
import InternalException from '../../../../src/Context/Shared/Domain/Exception/InternalException';
import { SharedMother } from '../../SharedMother';

describe('InternalException', () => {
    let sut: InternalException | null = null;

    beforeEach(() => {
        sut = SharedMother.InternalException();
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

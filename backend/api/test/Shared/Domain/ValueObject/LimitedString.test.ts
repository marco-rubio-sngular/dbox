import { LimitedString } from '../../../../src/Context/Shared/Domain/ValueObject/LimitedString';
import { SharedMother } from '../../SharedMother';

describe('Limited string value object', () => {
    it(`should throw a child exception if char length its wrong, ${LimitedString.MINIMUM_STANDARD_STRING} - ${LimitedString.MAXIMUM_STANDARD_STRING}`, () => {
        expect(() => {
            SharedMother.LimitedString('a');
        }).toThrow();
        expect(() => {
            SharedMother.LimitedString(
                'a'.repeat(LimitedString.MINIMUM_STANDARD_STRING - 1)
            );
        }).toThrow();
        expect(() => {
            SharedMother.LimitedString(
                'a'.repeat(LimitedString.MAXIMUM_STANDARD_STRING + 1)
            );
        }).toThrow();
    });

    it(`should not throw a child exception if char length its between ${LimitedString.MINIMUM_STANDARD_STRING} - ${LimitedString.MAXIMUM_STANDARD_STRING}`, () => {
        expect(() => {
            SharedMother.LimitedString(
                'a'.repeat(LimitedString.MINIMUM_STANDARD_STRING)
            );
        }).not.toThrow();
        expect(() => {
            SharedMother.LimitedString(
                'a'.repeat(LimitedString.MAXIMUM_STANDARD_STRING)
            );
        }).not.toThrow();
    });
});

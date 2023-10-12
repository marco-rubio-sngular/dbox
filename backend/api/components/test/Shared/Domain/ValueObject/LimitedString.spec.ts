import { LimitedString } from '../../../../src/Shared/Domain/ValueObject/LimitedString';

class LimitedStringImp extends LimitedString {
    protected throwException(): void {
        throw new Error(this.value);
    }
}

describe('Limited string value object', () => {
    it('should throw a child exception if char length its wrong, 5 - 50', () => {
        expect(() => {
            new LimitedStringImp('', 5, 50);
        }).toThrow();
        expect(() => {
            new LimitedStringImp('a'.repeat(5 - 1), 5, 50);
        }).toThrow();
        expect(() => {
            new LimitedStringImp('a'.repeat(50 + 1), 5, 50);
        }).toThrow();
        expect(() => {
            new LimitedStringImp('a'.repeat(3), 5, 50);
        }).toThrow();
    });

    it('should not throw a child exception if char length its between 5 - 50', () => {
        expect(() => {
            new LimitedStringImp('a'.repeat(5), 5, 50);
        }).not.toThrow();
        expect(() => {
            new LimitedStringImp('a'.repeat(50), 5, 50);
        }).not.toThrow();
        expect(() => {
            new LimitedStringImp('a'.repeat(32), 5, 50);
        }).not.toThrow();
    });
}); 
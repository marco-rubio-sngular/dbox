import { LimitedString } from '../../src/Context/Shared/Domain/ValueObject/LimitedString';

class LimitedStringImp extends LimitedString {
    protected throwException(): void {
        throw new Error(this.value);
    }
}

export class SharedMother {
    public static LimitedString(value?: string): LimitedString {
        return new LimitedStringImp(
            value !== undefined
                ? value
                : 'a'.repeat(LimitedString.MINIMUM_STANDARD_STRING)
        );
    }
}

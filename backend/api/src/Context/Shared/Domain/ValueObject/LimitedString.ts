export abstract class LimitedString {
    public static MINIMUM_STANDARD_STRING: number = 5;
    public static MAXIMUM_STANDARD_STRING: number = 50;

    constructor(
        public readonly value: string,
        public readonly minimum: number = LimitedString.MINIMUM_STANDARD_STRING,
        public readonly maximum: number = LimitedString.MAXIMUM_STANDARD_STRING
    ) {
        this.validateOrThrowException(value);
    }

    private validateOrThrowException(value: string): void {
        if (value.length >= this.minimum && value.length <= this.maximum) {
            return;
        }

        this.throwException(value);
    }

    protected abstract throwException(value: string): void;
}

export abstract class LimitedString {
    public static MINIMUM_STANDARD_STRING: number = 5;
    public static MAXIMUM_STANDARD_STRING: number = 50;

    constructor(
        public readonly value: string,
        public readonly minimum: number = LimitedString.MINIMUM_STANDARD_STRING,
        public readonly maximum: number = LimitedString.MAXIMUM_STANDARD_STRING
    ) {
        this.validateOrThrowException();
    }

    private validateOrThrowException(): void {
        if (
            this.value.length >= this.minimum &&
            this.value.length <= this.maximum
        ) {
            return;
        }

        this.throwException();
    }

    protected abstract throwException(): void;
}

import BadRequestException from '../Exception/BadRequestException';

class Tags {
    public static MINIMUM_LENGTH_BY_TAG: number = 3;
    public static MAXIMUM_LENGTH_BY_TAG: number = 15;
    public total: number = 0;

    constructor(
        public readonly value: string,
        public readonly minimum: number = Tags.MINIMUM_LENGTH_BY_TAG,
        public readonly maximum: number = Tags.MAXIMUM_LENGTH_BY_TAG
    ) {
        this.validateOrThrowException();
    }

    protected validateOrThrowException(): void {
        const tags: string[] = this.value.split(',') || [];
        if (tags.length === 0) {
            this.throwException();
        }
        this.total = tags.length;

        tags.forEach((tag) => {
            if (tag.length >= this.minimum && tag.length <= this.maximum) {
                return;
            }

            this.throwException();
        });
    }

    protected throwException(): void {
        throw new BadRequestException(
            `each tag must be between ${Tags.MINIMUM_LENGTH_BY_TAG} and ${Tags.MAXIMUM_LENGTH_BY_TAG} chars length, your tags are not valid: ${this.value}`
        );
    }
}

export default Tags;

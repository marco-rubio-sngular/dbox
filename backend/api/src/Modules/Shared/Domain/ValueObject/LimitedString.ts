export abstract class LimitedString {
  constructor(
    public readonly value: string,
    public readonly minimum: number,
    public readonly maximum: number
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

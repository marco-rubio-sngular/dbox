import { LimitedString } from "../../src/Modules/Shared/Domain/ValueObject/LimitedString";

const MINIMUM_STANDARD_STRING: number = 5;
const MAXIMUM_STANDARD_STRING: number = 50;

class LimitedStringImp extends LimitedString {
  protected throwException(): void {
    throw new Error(this.value);
  }
}

export class SharedMother {
  public static LimitedString(value?: string): LimitedString {
    return new LimitedStringImp(
      value !== undefined ? value : "a".repeat(MINIMUM_STANDARD_STRING),
      MINIMUM_STANDARD_STRING,
      MAXIMUM_STANDARD_STRING
    );
  }
}

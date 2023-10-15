import { LimitedString } from "../../../../src/Shared/Domain/ValueObject/LimitedString";

class LimitedStringImp extends LimitedString {
  protected throwException(): void {
    throw new Error(this.value);
  }
}

const MINIMUM: number = 5;
const MAXIMUM: number = 50;

describe("Limited string value object", () => {
  it(`should throw a child exception if char length its wrong, ${MINIMUM} - ${MAXIMUM}`, () => {
    expect(() => {
      new LimitedStringImp("", MINIMUM, MAXIMUM);
    }).toThrow();
    expect(() => {
      new LimitedStringImp("a".repeat(MINIMUM - 1), MINIMUM, MAXIMUM);
    }).toThrow();
    expect(() => {
      new LimitedStringImp("a".repeat(MAXIMUM + 1), MINIMUM, MAXIMUM);
    }).toThrow();
  });

  it(`should not throw a child exception if char length its between ${MINIMUM} - ${MAXIMUM}`, () => {
    expect(() => {
      new LimitedStringImp("a".repeat(MINIMUM), MINIMUM, MAXIMUM);
    }).not.toThrow();
    expect(() => {
      new LimitedStringImp("a".repeat(MAXIMUM), MINIMUM, MAXIMUM);
    }).not.toThrow();
  });
});

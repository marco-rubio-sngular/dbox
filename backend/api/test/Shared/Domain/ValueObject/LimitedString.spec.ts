import { SharedMother } from "../../SharedMother";

describe("Limited string value object", () => {
  it(`should throw a child exception if char length its wrong, ${MINIMUM} - ${MAXIMUM}`, () => {
    expect(() => {
      SharedMother.LimitedString("a");
    }).toThrow();
    expect(() => {
      SharedMother.LimitedString("a".repeat(MINIMUM - 1), MINIMUM, MAXIMUM);
    }).toThrow();
    expect(() => {
      SharedMother.LimitedString("a".repeat(MAXIMUM + 1), MINIMUM, MAXIMUM);
    }).toThrow();
  });

  it(`should not throw a child exception if char length its between ${MINIMUM} - ${MAXIMUM}`, () => {
    expect(() => {
      SharedMother.LimitedString("a".repeat(MINIMUM), MINIMUM, MAXIMUM);
    }).not.toThrow();
    expect(() => {
      SharedMother.LimitedString("a".repeat(MAXIMUM), MINIMUM, MAXIMUM);
    }).not.toThrow();
  });
});

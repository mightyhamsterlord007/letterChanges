const LetterChanges = require("./LetterChanges");

test("longestword is a function", () => {
    expect(typeof LetterChanges).toBe("function");
});

test("longest word returns a string value", () => {
    expect(typeof LetterChanges("")).toBe("string");
});

test("LetterChanges 1", () => {
    expect(LetterChanges("this long cake z@&")).toBe("UIjt mpOh dblf A@&");
});

test("LetterChanges 2", () => {
    expect(LetterChanges("abc")).toBe("bcd");
});

test("LetterChanges 3", () => {
    expect(LetterChanges("abc zzz")).toBe("bcd AAA");
});
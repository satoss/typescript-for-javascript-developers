export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
}

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}
let green = COLORS.GREEN;
console.log({ green });
COLORS.YELLOW;

let num10 = 1;
let numLength = String(num10).length;

if (num10 > 0 && numLength == 1) {
  console.log(`"${num10}" является положительным однозначным числом`);
} else if (num10 > 0 && numLength == 2) {
  console.log(`"${num10}" является положительным двузначным числом`);
} else if (num10 > 0 && numLength == 3) {
  console.log(`"${num10}" является положительным трехзначным числом`);
} else if (num10 < 0 && numLength == 2) {
  console.log(`"${num10}" является отрицательным однозначным числом`);
} else if (num10 < 0 && numLength == 3) {
  console.log(`"${num10}" является отрицательным двузначным числом`);
} else if (num10 < 0 && numLength == 4) {
  console.log(`"${num10}" является отрицательным трехзначным числом`);
}

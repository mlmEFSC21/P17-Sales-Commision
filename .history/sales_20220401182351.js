//  base salary = $200 + commission
// commission = gross sales * 9%
// range floor / 100 - 2 = index 0 - 8
// test:
x1 = Math.floor(218 / 100) - 2;
x2 = Math.floor(258 / 100) - 2;
x3 = Math.floor(288 / 100) - 2;
x4 = Math.floor(299 / 100) - 2;
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);

y1 = Math.floor(399 / 100) - 2;
y2 = Math.floor(300 / 100) - 2;
y3 = Math.floor(350 / 100) - 2;
console.log(y1);
console.log(y2);
console.log(y3);
// works for all ranges below the last. Just check for >1000 first.
let ranges = [];
console.log(ranges);
const baseSalary = 200;
const commissionAmount = grossSales * 0.09;
const totalSalary = baseSalary + commissionAmount;

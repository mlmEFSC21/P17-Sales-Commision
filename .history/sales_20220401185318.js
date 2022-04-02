//  base salary = $200 + commission
// commission = gross sales * 9%
// range floor / 100 - 2 = index 0 - 8
// test: x1 = Math.floor(218 / 100) - 2;
// works for all ranges below the last. Just check for >1000 first.
const baseSalary = 200;
let commissionAmount;
let totalSalary;
let employeeNum = 1;
let salaryRanges = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let weeklyGrossSales = [];
const form = document.querySelector("#salaryForm");
const salesInput = document.querySelector("#grossSales");
form.addEventListener("submit", getWeeklySales);
function getWeeklySales(e) {
    e.preventDefault();
    weeklyGrossSales.push(salesInput.value);
}
function calcCommission() {
    commissionAmount = weeklyGrossSales[employeeNum] * 0.09;
}
function calcTotalWeeklySalary(commissionAmount) {
    totalSalary = baseSalary + commissionAmount;
}
function calcSalaryRange(totalSalary) {
    if (totalSalary >= 1000) {
        salaryRanges[8]++;
    } else {
        salaryRanges[Math.floor(totalSalary / 100) - 2];
    }
}

console.log(salaryRanges);
console.log(weeklyGrossSales);

//  base salary = $200 + commission
// commission = gross sales * 9%
// range floor / 100 - 2 = index 0 - 8
// test: x1 = Math.floor(218 / 100) - 2;
// works for all ranges below the last. Just check for >1000 first.
const baseSalary = 200;
let commissionAmount;
let totalSalary;
let employeeNum = 0;
let salaryRanges = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let weeklyGrossSales = [];

const form = document.querySelector("#salaryForm");
const salesInput = document.querySelector("#grossSales");
form.addEventListener("submit", getWeeklySal);
fillRangeCol();

function getWeeklySal(e) {
    e.preventDefault();
    employeeNum++;
    weeklyGrossSales.push(salesInput.value);
    salesInput.value = "";
    calcCommission();
    calcTotalWeeklySalary(commissionAmount);
    calcSalaryRange(totalSalary);
}
function calcCommission() {
    commissionAmount = weeklyGrossSales[employeeNum] * 0.09;
}
function calcTotalWeeklySalary(commissionAmount) {
    totalSalary = baseSalary + commissionAmount;
}
function calcSalaryRange(totalSalary) {
    let i;
    if (totalSalary >= 1000) {
        salaryRanges[8]++;
    } else {
        i = Math.floor(totalSalary / 100) - 2;
        salaryRanges[i]++;
    }
}
function fillRangeCol() {
    const td = document.querySelector(`#numEmployees-${employeeNum}`);
    let index = employeeNum - 1;
    td.innerText = salaryRanges[index];
}

console.log(salaryRanges);
console.log(weeklyGrossSales);

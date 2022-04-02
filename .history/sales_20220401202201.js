//  base salary = $200 + commission
// commission = gross sales * 9%
// range floor / 100 - 2 = index 0 - 8
// test: x1 = Math.floor(218 / 100) - 2;
// works for all ranges below the last. Just check for >1000 first.
const baseSalary = 200;
let commissionAmount = 0;
let totalSalary = 0;
let employeeNum = 0;
let salaryRanges = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let weeklyGrossSales = [];

const form = document.querySelector("#salaryForm");
const salesInput = document.querySelector("#salesInp");
const td = document.querySelectorAll("td#ranges");
form.addEventListener("submit", getWeeklySal);

function getWeeklySal(e) {
    e.preventDefault();
    employeeNum++;
    weeklyGrossSales.push(salesInput.value);
    console.log(salesInput.value);
    calcCommission();
    calcTotalWeeklySalary();
    calcSalaryRange();
    fillRangeCol();
    salesInput.value = "";
}
function calcCommission() {
    commissionAmount = weeklyGrossSales[employeeNum] * 0.09;
}
function calcTotalWeeklySalary() {
    totalSalary = baseSalary + commissionAmount;
}
function calcSalaryRange() {
    if (totalSalary >= 1000) {
        salaryRanges[8] = salaryRanges[8] + 1;
    } else {
        let i = Math.floor(totalSalary / 100) - 2;
        console.log(i);
        salaryRanges[i] = salaryRanges[i] + 1;
    }
}
//append the table
function fillRangeCol() {
    let index = employeeNum - 1;
    td.innerText = salaryRanges[index];
}

console.log(salaryRanges);
console.log(weeklyGrossSales);

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
const salesInput = document.getElementById("salesInp");
const td = document.querySelectorAll("td#ranges");
form.addEventListener("submit", getWeeklySal);

function getWeeklySal(e) {
    e.preventDefault();
    employeeNum++;
    weeklyGrossSales = parseInt(salesInput.value);
    calcCommission();
    calcTotalWeeklySalary();
    calcSalaryRange(totalSalary);
    fillRangeCol();
    salesInput.value = "";
}
function calcCommission() {
    commissionAmount = weeklyGrossSales * 0.09;
}
function calcTotalWeeklySalary() {
    totalSalary = baseSalary + commissionAmount;
    console.log(totalSalary);
    console.log(salaryRanges);
}
function calcSalaryRange(totalSalary) {
    if (totalSalary >= 1000) {
        salaryRanges[8] += 1;
    } else if (totalSalary < 1000) {
        let i = Math.floor(totalSalary / 100) - 2;
        salaryRanges[i] = salaryRanges[i] + 1;
    }
}
//append the table
function fillRangeCol() {
    for (let i = 0; i < arr.len; i++) {
        td[i].innerText = salaryRanges[i];
    }
}

console.log(salaryRanges);
console.log(weeklyGrossSales);

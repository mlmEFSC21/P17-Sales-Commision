//  base salary = $200 + commission
// commission = gross sales * 9%
// range floor / 100 - 2 = index 0 - 8
// test: x1 = Math.floor(218 / 100) - 2;
// works for all ranges below the last. Just check for >1000 first.
const baseSalary = 200;
let commissionAmount;
const totalSalary = baseSalary + commissionAmount;
let employeeNum = 1;
let salaryRanges = [];
let weeklyGrossSales = [];
const form = document.querySelector("#salaryForm");
const salesInput = document.querySelector("#grossSales");
form.addEventListener("submit", getWeeklySales);
function getWeeklySales(e) {
    e.preventDefault();
    weeklyGrossSales.push(salesInput.value);
}
function calculateCommission() {
    commissionAmount = weeklyGrossSales[employeeNum] * 0.09;
}

//console.log(ranges);

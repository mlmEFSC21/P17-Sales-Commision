//  base salary = $200 + commission
// commission = gross sales * 9%
// range floor / 100 - 2 = index 0 - 8
// test: x1 = Math.floor(218 / 100) - 2;
// works for all ranges below the last. Just check for >1000 first.
const baseSalary = 200;
const commissionAmount = grossSales * 0.09;
const totalSalary = baseSalary + commissionAmount;

let salaryRanges = [];
const form = document.querySelector("#salaryForm");
const salesInput = document.querySelector("#grossSales");
form.addEventListener("submit", getSalary);
function getSalary(e) {
    e.preventDefault();
}

//console.log(ranges);

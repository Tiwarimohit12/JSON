fetch('your-data.json')
.then(response => response.json())
.then(data => displayData(data))
.catch(error => console.error('Error fetching data:', error));

function displayData(data) {
const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
tableBody.innerHTML = "";

data.forEach(entry => {
    const row = tableBody.insertRow();
    const dateCell = row.insertCell(0);
    const healthWeightCell = row.insertCell(1);
    const healthHeightCell = row.insertCell(2);
    const healthCaloriesCell = row.insertCell(3);
    const wealthIncomeCell = row.insertCell(4);
    const wealthExpensesCell = row.insertCell(5);
    const ageCell = row.insertCell(6);

    dateCell.innerHTML = entry.date;
    healthWeightCell.innerHTML = entry.health.weight;
    healthHeightCell.innerHTML = entry.health.height;
    healthCaloriesCell.innerHTML = entry.health.calories;
    wealthIncomeCell.innerHTML = entry.wealth.income;
    wealthExpensesCell.innerHTML = entry.wealth.expenses;
    ageCell.innerHTML = entry.age;
});
}
function searchData() {
const searchDate = document.getElementById("searchDate").value;
fetch('your-data.json')
    .then(response => response.json())
    .then(data => {
        const filteredData = data.filter(entry => entry.date === searchDate);
        displayData(filteredData);
    })
    .catch(error => console.error('Error fetching data:', error));
}
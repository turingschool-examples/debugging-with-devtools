// Retrieve expenses from the API
const getExpenses = () => {
  return fetch('/expenses', {
    dataType: 'json',
  })
  .then(response => response.json())
  .then(data => {
    console.log('Expenses returned successfully!');
    renderExpenses(data.expenses);
  })
  .catch(error => {
    console.error('There was some kind of error.');
  });
};

// Render expenses to the DOM
const renderExpenses = (expenses) => {
  const tableBody = $('#expenses-data tbody');
  expenses.forEach(expense => {
    const tableRow = document.createElement('tr');
    $(tableRow).addClass(expense.category);
    $(tableRow).append(`<td>${expense.category}</td>`);
    $(tableRow).append(`<td>${expense.description}</td>`);
    $(tableRow).append(`<td>${expense.cost}</td>`);
    tableBody.append(tableRow);
  });
};

// Add event handler for submitting a new expense
$('#submit-expense').on('submit', (e) => {
  e.preventDefault();
  let singleExpense = {
    category: e.currentTarget[0].value,
    description: e.currentTarget[1].value,
    cost: e.currentTarget[2].value
  } 
  let expenses = [];
  expenses.push(singleExpense)
  renderExpenses(expenses);
  console.log('Submitting a new expense...');
});


$(document).ready(() => {
  loadExpenses();
});


// Retrieve expenses from the API
const getExpenses = () => {
  $.ajax({
    method: 'GET',
    dataType: 'json',
    url: '/expenses',
    success: function (data) {
      console.log('Expenses returned successfully!');
      renderExpenses(data.expenses);
    },
    error: function (error) {
      console.error('There was some kind of error.');
    }
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
  let data = {};
  $('.form-field').each((index, formField) => {
    data[$(formField).attr('name')] = $(formField).val();
  });

  $.ajax({
    method: 'POST',
    dataType: 'json',
    url: '/expensive',
    data: data,
    success: function (data) {
      renderExpenses(data);
    }
  });
});


$(document).ready(() => {
  getExpenses();
});

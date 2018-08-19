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
    tableRow.dataset.expenseId = expenseId;

    $(tableRow).addClass(expense.category);
    $(tableRow).append(`<td data-prop="category" class="expense" contenteditable>${expense.category}</td>`);
    $(tableRow).append(`<td data-prop="description" class="expense" contenteditable>${expense.description}</td>`);
    $(tableRow).append(`<td data-prop="cost" class="expense" contenteditable>${expense.cost}</td>`);
    tableBody.append(tableRow);
  });
};

// Add notification bar
function showNotification(note) {
  $('body').append(`<p class="notification ${note.status}">${note.message}</p>`);
}

// Add edit handler
$('#expenses-data').on('keydown', '.expense', function(event) {
  const $expenseRow = $(this).parent();
  const expenseId = $expenseRow.data('expenseId');
  const dataProp = $(this).data('property');
  const expenseData = { [dataProp]: $(this).text() }

  if (event.keyCode === 13) {
    $(this).blur();
    $.ajax({
      method: 'PATCH',
      dataType: 'json',
      url: `/expenses/${expenseId}`,
      data: expenseData,
      success: function() {
        showNotification({
          message: 'Expense Updated Successfully'
        });
      },
      error: function() {
        showNotification({
          status: 'error',
          message: 'Error updating expense'
        });
      }
    });
    return false;
  }
});

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

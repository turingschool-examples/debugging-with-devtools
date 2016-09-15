# Expense Tracker

A simple API for tracking expenses.

## Setup

```
npm install
```

## Running

```
npm start
```

Go visit `http://localhost:3000`.

## Endpoints

* `GET /expenses` returns a all of the expenses available.
* `GET /expenses/:id` returns a given expense from the API.
* `POST /expenses` creates a new expense.
* `PUT /expenses/:id` updates the content of the expense.
* `DELETE /expenses/:id` deletes a expense.

## Debugging Practice Scenarios

Each debugging scenario is contained in a separate branch. The master branch contains the application in its most basic state, to coincide with the [DevTools Debugging Lesson Plan (link to come)](). To work through different debugging scenarios, switch to the branch you'd like to work on:

### Practice Scenario 1 - Expense Category Highlighting
#### Branch: [category-highlighting (link to come)]()

Whenever we make a selection in the select menu for 'Highlight Expenses', we want the table rows corresponding to the selected category to have a yellow background. Currently nothing seems to be happening when we use this menu. Let's figure out why.
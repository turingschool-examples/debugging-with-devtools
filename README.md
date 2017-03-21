# Expense Tracker

A simple expense tracking application with different bugs to solve using devtools. This application coincides with the [DevTools Debugging Lesson Plan (link to come)]().

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
* `PATCH /expenses/:id` updates the content of the expense.
* `DELETE /expenses/:id` deletes a expense.

## Debugging Practice Scenarios

Each debugging scenario is contained in a separate branch. The master branch contains the application in its most basic state, to coincide with the [DevTools Debugging Lesson Plan](http://frontend.turing.io/lessons/debugging-with-devtools.html). To work through different debugging scenarios, switch to the branch you'd like to work on:

------------------------------------------

**Practice Scenario 1 - Expense Category Highlighting**  
**Branch:** [category-highlighting](https://github.com/turingschool-examples/debugging-with-devtools/tree/category-highlighting)

Whenever we make a selection in the select menu for 'Highlight Expenses', we want the table rows corresponding to the selected category to have a yellow background. Currently nothing seems to be happening when we use this menu. Let's figure out why.

------------------------------------------

**Practice Scenario 2 - POST Request**  
**Branch:** [post-request](https://github.com/turingschool-examples/debugging-with-devtools/tree/post-request)

When we fill out the expense form and click the "Submit Expense" button, we should see our new expense appended to the bottom of the list of expenses. Currently, nothing is happening when we try to submit a new expense. Figure out why!

Try not to rely on using `console.logs()` here. Instead, set breakpoints in the sources panel to pause code execution and inspect your local variables.

------------------------------------------

**Practice Scenario 3 - Inline Editing**  
**Branch:** [edit-inline](https://github.com/turingschool-examples/debugging-with-devtools/tree/edit-inline)

When a user clicks on a pre-existing expense, we want to be able to update that single value for the expense when they hit the ENTER key. When we first start up this branch, we can see that we're not even getting our pre-defined expenses rendered to the DOM. Figure out why, then try out the inline editing. Spoiler alert, it's not going to work. When you do get it working, we should see a success notification appear at the top of the page that's highlighted green. It doesn't seem to have a background color on it at the moment. Fix it!
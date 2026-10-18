# Date Counter v2

**React learning path — Challenge 3.** Controlled inputs and derived state.

A date calculator: choose a step with a range slider, move forward or backward in days with the − / + buttons or by typing the number, and see which date that is. A Reset button appears only when something changed.

## What I practiced

- Several pieces of state with `useState`
- Controlled inputs (range slider and text field)
- Updating state from the previous value (`setCount(c => c + step)`)
- Deriving values from state instead of storing them (the computed date)
- Conditional rendering of the Reset button

## Run it locally

Requires [Node.js](https://nodejs.org/) (LTS).

```bash
npm install
npm start
```

Then open http://localhost:3000.

## Built with

React 18 · Create React App (`react-scripts` 5)

## Part of a series

These repositories are exercises from my React learning path (2024), based on Jonas Schmedtmann's *The Ultimate React Course*.

| # | Repository | Topic |
|---|---|---|
| Project 1 | [Pizza Menu](https://github.com/stgermanrobert/React-Project-001---Pizza-Menu) | Components, props, rendering lists, conditional rendering |
| Challenge 1 | [Profile Card](https://github.com/stgermanrobert/React-Challenge-001---Profile-Card) | Components and props with a data list |
| Project 2 | [Flashcards](https://github.com/stgermanrobert/React-Project-002---Flashcards) | State with useState, click events |
| Challenge 3 | **Date Counter v2** (this repo) | Controlled inputs and derived state |
| Project 3 | [Far Away — Travel Packing List](https://github.com/stgermanrobert/React-Project-003---Travel-List) | Forms, lifting state up, child-to-parent communication |

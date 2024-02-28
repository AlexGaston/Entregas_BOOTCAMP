import "./style.css";

let baraja = ["hello", "a", "t", "q", 1, 2, 3, { cats: true }];

let barajarBaraja = baraja
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

console.log(barajarBaraja);

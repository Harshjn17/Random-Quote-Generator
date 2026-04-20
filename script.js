let quotes = [
  "Discipline beats motivation.",
  "Small steps every day build big results.",
  "You don’t rise to goals, you fall to systems.",
  "Consistency is the real talent.",
  "Do the work, especially when you don’t feel like it.",
  "Clarity comes from action, not thinking.",
  "Comfort is the enemy of progress.",
  "Focus on direction, not speed.",
  "Results are delayed, not denied.",
  "The habit you build today builds your future."
];

let randomIndex = Math.floor(Math.random() * quotes.length);

let h1 = document.querySelector('h1');
h1.textContent = quotes[randomIndex];

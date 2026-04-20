Random Quote Generator

A simple JavaScript project that displays a random motivational quote each time the page loads.

🚀 Features

- Generates a random quote from a predefined list
- Updates automatically on page refresh
- Lightweight and beginner-friendly

🛠️ Technologies Used

- HTML
- JavaScript (DOM manipulation)

📂 Project Structure

project-folder/
│── index.html
│── script.js

📄 How It Works

1. A list of motivational quotes is stored in an array.
2. A random index is generated using:
   Math.floor(Math.random() * quotes.length)
3. The selected quote is displayed inside the "<h1>" element using:
   h1.textContent = quotes[randomIndex];

▶️ How to Run

1. Clone or download the repository
2. Open "index.html" in your browser
3. Refresh the page to see a new quote

💡 Future Improvements

- Add a button to generate a new quote without refreshing
- Style the UI with CSS
- Add categories (success, discipline, mindset, etc.)
- Fetch quotes from an API

Simple project, but a strong step toward mastering JavaScript fundamentals.

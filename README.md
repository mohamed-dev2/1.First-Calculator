to note this file and the notes are made by AI
# 🧮 Modern Modular Calculator

A sleek, responsive, and fully modular calculator web application built with **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6 Modules)**.

---

## ✨ Features

- **⚡ Core Arithmetic:** Addition, Subtraction, Multiplication, and Division.
- **🔬 Advanced Operations:**
  - **Power ($x^y$):** Calculate exponents easily.
  - **Root ($^y\sqrt{x}$):** Calculate $n$-th degree roots.
- **🧠 Memory Recall ("Ans"):** Remembers your last calculated answer for continuous calculations.
- **🛡️ Error Handling & Guards:**
  - Prevents division by zero (`Error: can't divide by 0`).
  - Prevents $0$-degree root operations.
  - Dynamic input validation checking if one or both fields are missing.
- **💡 Smart Hover UX:** Hovering over the **Root** button temporarily stashes typed inputs and displays helpful placeholder guidance (`Base number` and `Root degree`), restoring original values seamlessly on mouse leave.
- **📱 Fully Responsive:** Clean card UI powered by CSS Grid and Flexbox that adapts to mobile phones, tablets, and desktops.
- **📦 Clean Architecture:** Built strictly using ES6 `import` / `export` modules and `addEventListener` with zero inline JavaScript.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic markup & accessibility.
- **CSS3:** Modern CSS Grid, Flexbox, custom interactive states (`:hover`, `:active`), and fluid sizing.
- **JavaScript (ES6+):** ES Modules, DOM manipulation, ternary operators, and JSDoc documentation.

---

## 📁 Project Structure

```text
calculator-app/
│
├── index.html              # Main HTML markup (Module Entry Point)
├── style.css               # Responsive styling & layout
├── README.md               # Project documentation
│
└── script/
    ├── eventbutton.js      # Main entry script (Event listeners controller)
    ├── main.js             # Core calculation engine & UI state
    └── helper.js           # Reusable validation utilities

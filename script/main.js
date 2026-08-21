import {checkIfNull} from "./helper.js";

/* ╔═════════════════════════════════════════════════════════════════════════╗
   ║ 1. DOM REFERENCES & APPLICATION STATE                                   ║
   ╚═════════════════════════════════════════════════════════════════════════╝ */

// ─── Input & Output Elements ────────────────────────────────────────────────
export const firstNumber  = document.getElementById("first-number");
export const secondNumber = document.getElementById("second-number");
const result       = document.getElementById("result-text");
const rootBtn      = document.getElementById("root-btn");

// ─── Global State & Temporary Memory ────────────────────────────────────────
let sum;           // 💾 Stores the most recent calculation result (for "Ans")
let savedNum1 = ""; // 📦 Stashes Box 1 value during Root button hover
let savedNum2 = ""; // 📦 Stashes Box 2 value during Root button hover


/* ╔═════════════════════════════════════════════════════════════════════════╗
   ║ 2. HELPER FUNCTIONS                                                     ║
   ╚═════════════════════════════════════════════════════════════════════════╝ */

/**
 * 💡 UX ENHANCEMENT: Root Button Hover (Enter)
 * Temporarily stashes user numbers, validates them, and clears inputs
 * so descriptive placeholder guides become visible to the user.
 */
 export function showRootHelp() {
    // 1. Update guidance placeholders
    firstNumber.placeholder  = "Base number (e.g. 27)";
    secondNumber.placeholder = "Root degree (e.g. 3)";

    const num1 = parseFloat(firstNumber.value);
    const num2 = parseFloat(secondNumber.value);

    // 2. Safely stash valid numbers; fallback to empty string
    savedNum1 = Number.isFinite(num1) ? num1.toFixed(2) : "";
    savedNum2 = Number.isFinite(num2) ? num2.toFixed(2) : "";

    // 3. Clear fields to reveal placeholder hints
    firstNumber.value  = "";
    secondNumber.value = "";
}

/**
 * 💡 UX ENHANCEMENT: Root Button Hover (Leave)
 * Restores original inputs and resets default placeholder text.
 */
export function resetHelp() {
    firstNumber.placeholder  = "Enter first number";
    secondNumber.placeholder = "Enter second number";

    firstNumber.value  = savedNum1;
    secondNumber.value = savedNum2;
}


/* ╔═════════════════════════════════════════════════════════════════════════╗
   ║ 3. EVENT LISTENERS                                                      ║
   ╚═════════════════════════════════════════════════════════════════════════╝ */



/* ╔═════════════════════════════════════════════════════════════════════════╗
   ║ 4. MAIN CALCULATOR CONTROLLER                                           ║
   ╚═════════════════════════════════════════════════════════════════════════╝ */

/**
 * Executes calculations and updates the DOM based on user interaction.
 * @param {string} operation - Math action ('add'|'subtract'|'multiply'|'divide'|'power'|'root'|'Ans'|'clear')
 */
export function calculator(operation) {

    // ─── Case A: Reset / Clear ──────────────────────────────────────────────
    if (operation === "clear") {
        firstNumber.value  = "";
        secondNumber.value = "";
        result.textContent = "";
        return; // 🛑 Halt further execution
    }

    // ─── Case B: Root Calculation (Uses Stashed Hover Values) ────────────────
    if (operation === "root") {
        // 🛡️ Guard: Check if stashed inputs exist
        if (savedNum1 === "" && savedNum2 === "") {
            result.textContent = "Please input the 2 numbers";
            return;
        } 
        if (savedNum1 === "" || savedNum2 === "") {
            result.textContent = "Please input both numbers";
            return;
        }
        // 🛡️ Guard: Prevent 0-degree root
        if (savedNum2 === 0) {
            result.textContent = "Error: root degree cannot be 0";
            return;
        }

        sum = savedNum1 ** (1 / savedNum2);
        result.textContent = `The result is: ${sum.toFixed(2)}`;
        return;
    }

    // ─── Case C: Answer Recall ("Ans") ──────────────────────────────────────
    if (operation === "Ans") {
        if (Number.isFinite(sum)) {
            firstNumber.value  = sum.toFixed(2);
            secondNumber.value = "";
            result.textContent = `Loaded answer: ${sum.toFixed(2)}`;
            return;
        } else {
            result.textContent = "Please do a calculation before using Ans";
            return;
        }
    }

    // ─── Case D: Input Validation for Standard Operations ───────────────────
    let validation = checkIfNull(firstNumber.value, secondNumber.value);
    if (validation[0]) {
        result.textContent = (validation[1] === 2) 
            ? "Please input the 2 numbers" 
            : "Please input both numbers";
        return;
    }

    // ─── Case E: Standard Math Engine ───────────────────────────────────────
    const num1 = parseFloat(firstNumber.value);
    const num2 = parseFloat(secondNumber.value);

    switch (operation) {
        case "add":
            sum = num1 + num2;
            break;

        case "subtract":
            sum = num1 - num2;
            break;

        case "multiply":
            sum = num1 * num2;
            break;

        case "divide":
            // 🛡️ Guard: Prevent division by zero
            if (num2 === 0) {
                result.textContent = `Error: can't divide ${num1} by 0`;
                return;
            }
            sum = num1 / num2;
            break;

        case "power":
            sum = num1 ** num2;
            break;
    }

    // ─── Case F: Output Final Render ────────────────────────────────────────
    result.textContent = `The result is: ${sum.toFixed(2)}`;
}

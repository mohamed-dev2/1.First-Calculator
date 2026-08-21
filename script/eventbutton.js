/* ╔═════════════════════════════════════════════════════════════════════════╗
   ║ EVENT CONTROLLER (Entry Point)                                          ║
   ║ Connects DOM button interactions to calculator logic & UX helpers       ║
   ╚═════════════════════════════════════════════════════════════════════════╝ */

// ─── 1. MODULE IMPORTS ──────────────────────────────────────────────────────
import { calculator, showRootHelp, resetHelp, firstNumber, secondNumber } from './main.js';
import { roundto2sf } from './helper.js';

// ─── 2. DOM BUTTON REFERENCES ───────────────────────────────────────────────
// Math Operation Buttons
const addBtn      = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");
const multiplyBtn = document.getElementById("multiply-btn");
const divideBtn   = document.getElementById("divide-btn");
const powerBtn    = document.getElementById("power-btn");
const rootBtn     = document.getElementById("root-btn");

// Control & Memory Buttons
const ansBtn      = document.getElementById("ans-btn");
const clearBtn    = document.getElementById("clear-btn");


// ─── 3. CLICK EVENT LISTENERS (CALCULATOR OPERATIONS) ───────────────────────

// Standard Arithmetic
addBtn.addEventListener("click", () => calculator("add"));
subtractBtn.addEventListener("click", () => calculator("subtract"));
multiplyBtn.addEventListener("click", () => calculator("multiply"));
divideBtn.addEventListener("click", () => calculator("divide"));

// Advanced Math
powerBtn.addEventListener("click", () => calculator("power"));
rootBtn.addEventListener("click", () => calculator("root"));

// Memory & Reset
ansBtn.addEventListener("click", () => calculator("Ans"));
clearBtn.addEventListener("click", () => calculator("clear"));


// ─── 4. HOVER EVENT LISTENERS (ROOT UX GUIDANCE) ─────────────────────────────

// Shows placeholder guide when mouse enters the Root button
rootBtn.addEventListener("mouseenter", showRootHelp);

// Restores user inputs when mouse leaves the Root button
rootBtn.addEventListener("mouseleave", resetHelp);


firstNumber.addEventListener('mouseleave',()=>{roundto2sf(true)})
secondNumber.addEventListener('mouseleave', ()=>{roundto2sf(false)})
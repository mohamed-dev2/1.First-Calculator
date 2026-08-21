import { firstNumber,secondNumber } from "./main.js";
/* ╔═════════════════════════════════════════════════════════════════════════╗
   ║ VALIDATION & UTILITY HELPERS                                            ║
   ║ Reusable helper functions for input verification and sanitization       ║
   ╚═════════════════════════════════════════════════════════════════════════╝ */

/**
 * Validates whether the calculation input fields contain values or are empty.
 * 
 * @param {string} num1 - The raw string value from the first input field
 * @param {string} num2 - The raw string value from the second input field
 * @returns {Array} - [hasError: boolean, missingCount?: number]
 *                    - [true, 2]  -> Both fields are empty
 *                    - [true, 1]  -> Exactly one field is empty
 *                    - [false]    -> Both fields contain values
 */
export function checkIfNull(num1, num2) {
    if (num1 === "" && num2 === "") {
        return [true, 2]; // 🚨 Both inputs are missing
    } else if (num1 === "" || num2 === "") {
        return [true, 1]; // ⚠️ Exactly one input is missing
    } else {
        return [false];   // ✅ All inputs are present and ready
    }
}
/** 
 * @param {boolean} isisnum1 -- takes a true or false value to know if the number given is num1
 *  */
export function roundto2sf(isisnum1){
 if (isisnum1===true&&Number.isFinite(parseFloat(firstNumber.value))){
   firstNumber.value = parseFloat(firstNumber.value).toFixed(2);
 }
 else if (isisnum1===false&&Number.isFinite(parseFloat(secondNumber.value))) {
  secondNumber.value = parseFloat(secondNumber.value).toFixed(2);
 }
}
// ─── MODULE EXPORT ──────────────────────────────────────────────────────────

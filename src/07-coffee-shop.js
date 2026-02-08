/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  let ans = 0.0;
  switch (size) {
    case "small":
      ans += 3.0;
      break;
    case "medium":
      ans += 4.0;
      break;
    case "large":
      ans += 5.0;
      break;
    default:
      return -1;
  }
  switch (type) {
    case "regular":
      ans += 0;
      break;
    case "latte":
      ans += 1.0;
      break;
    case "cappuccino":
      ans += 1.5;
      break;
    case "mocha":
      ans += 2.0;
      break;
    default:
      return -1;
  }
  if (extras.extraShot) {
    ans += 0.75;
  }
  if (extras.whippedCream) {
    ans += 0.5;
  }
  return Number(ans.toFixed(2));
}

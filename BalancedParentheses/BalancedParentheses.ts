import { Stack } from "../Stack/Stack";

export function isBalanced(expr: string): boolean {
  let stack = new Stack();
  for (let i = 0; i < expr.length; i++) {
    if (expr[i] === "{" || expr[i] === "[" || expr[i] === "(") {
      stack.push(expr[i]);
      continue;
    }
    if (stack.isEmpty()) return false;
    let top;

    switch (expr[i]) {
      case ")":
        top = stack.pop();
        if (top !== "(") return false;
        break;
      case "}":
        top = stack.pop();
        if (top !== "{") return false;
        break;
      case "]":
        top = stack.pop();
        if (top !== "[") return false;
        break;

      default:
        break;
    }
  }
  return stack.isEmpty();
}

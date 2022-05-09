export function validate(input: string): boolean {
  let count = 0;
  for (let i = 0; i < input.length; i += 1) {
    if (count <= 0 && input[i] === ")") {
      count -= 1
      break
    }
    if (input[i] === '(') {
      count += 1
      continue
    }
    count -= 1
  }
  return count === 0
}

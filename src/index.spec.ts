import { validate } from './index'

describe("validate the bracket pair", () => {
  it('1. "()" should return true', () => {
    const result = validate('()')
    expect(result).toBe(true)
  });

  it('2. "()()" should return true', () => {
    const result = validate("()()")
    expect(result).toBe(true)
  });

  it('3. ")(" should return false', () => {
    const result = validate(')(')
    expect(result).toBe(false)
  });

  it('4. "" should return true', () => {
    const result = validate("")
    expect(result).toBe(true)
  });

  it('5. "((()))" should return true', () => {
    const result = validate("((()))")
    expect(result).toBe(true)
  });

  it('6. "((()" should return false', () => {
    const result = validate("((()")
    expect(result).toBe(false)
  });

})
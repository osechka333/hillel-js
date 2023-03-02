import add from './add';

describe('fn add()', () => {
  it('should add two numbers', () => {
    expect(add(2, 4)).toBe(6)
  })

  it('should accept one argument', () => {
    expect(add(8)).toBe(8)
  })
})
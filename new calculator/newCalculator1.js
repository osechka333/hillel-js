function createCalculator(base) {
    let number;
    return {
        add: (number) => Number(base + number),
        sub: (number) => Number(base - number),
        set: (number) => Number(base = number),
        get: () => Number(base)
    }
}

const calculator = createCalculator(100);

console.log(calculator.add(10)); // 110 - это текущее значение base
console.log(calculator.add(10));
console.log(calculator.sub(20));

console.log(calculator.set(20));
console.log(calculator.add(10));
console.log(calculator.add(10));
console.log(calculator.add('qwe')); // NaN и значение 40 не менять

console.log(calculator.get()) // 40

//calculator.reset();
console.log(calculator.get()) // 100
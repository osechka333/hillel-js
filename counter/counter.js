function createCounter(base) {
    let counts = base;

    return {
        increment: () => ++counts, // to make increase and then show ++ before variable
        decrement: () => --counts
    }
}

const counter = createCounter(10);
alert(counter.increment());
alert(counter.decrement());

// if not return value - add get
//     increment: () => { counts +=1 }, // to make increase and then show ++ before variable
//     decrement: () => { counts -=1 },
//     get: 90 => counts
// console.log(counter.get())
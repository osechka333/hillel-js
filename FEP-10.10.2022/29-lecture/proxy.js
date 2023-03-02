const target = {
  message1: 'hello',
  message2: 'everyone',
  age: 42,
};

const handler = {
  get(target, prop) {
    console.log(`${prop} was read`)
    return target[prop];
  },
  set(target, prop, value) {
    target[prop] = value;
    console.log(`Value '${value}' was set into property '${prop}'`)
  },
};

const targetLog = new Proxy(target, handler);


// console.log(targetLog.age)
// message1 was read
// hello

targetLog.message2 = 'XXX';
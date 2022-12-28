export function isBoolean(value) {
    return !!value === value;
}

export function isNumber(value) {
    return typeof value === 'number'
}

export function isNull(value) {
    return value === null;
}

export function isString(value) {
    //check TypeError: Cannot convert a Symbol value to a string
    // return '' + value === value;
    return typeof value === 'string';
}

export function isSymbol(value) {
    return typeof value === 'symbol'
}

export function isUndefined(value) {
    return typeof value === 'undefined'
}
// TESTS:
    // Type utilities for primitives > isBoolean > true
    // Type utilities for primitives > isBoolean > false
    // Type utilities for primitives > isBoolean > non-boolean
    // Type utilities for primitives > isNumber > numbers
    // Type utilities for primitives > isNumber > NaN
    // Type utilities for primitives > isNumber > non-numbers
    // Type utilities for primitives > isNull > null
    // Type utilities for primitives > isNull > undefined
    // Type utilities for primitives > isNull > non-null
    // Type utilities for primitives > isString > strings
    // Type utilities for primitives > isString > non-string
    // Type utilities for primitives > isSymbol > symbols
    // Type utilities for primitives > isSymbol > non-symbols
    // Type utilities for primitives > isUndefined > undefined
    // Type utilities for primitives > isUndefined > null
    // Type utilities for primitives > isUndefined > non-undefined
'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

function multi(numbers) {
    let result = 0;
    for (let num of numbers) {
        if (result === 0) {
            result = num;
            continue;
        }
        result = result * num;
    }
    return result;
}
module.exports = {
    add: add,
    multi: multi
};
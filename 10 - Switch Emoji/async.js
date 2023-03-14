'use strict'

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
           resolve('resolved');
        }, 2000);
    })
}

console.log(resolveAfter2Seconds());
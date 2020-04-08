const formula = require('./src/formula')
const unit = require('./src/unit')

const f1 = formula.force(1, 4, 0.1),
    f2 = formula.force(2, 4, 0.1),
    n = f1 - f2,
    e = 9 + (unit.u[1] * 2)

function returnFac () {
    return {
        R: `F1: ${f1}N - ${f2}N = ${n}e${e}N = ${(n * 10 ** -3).toPrecision(2)}`
    }
}
console.log(returnFac())
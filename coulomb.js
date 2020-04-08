const formula = require('./src/formula')
const unit = require('./src/unit')

const f1 = formula.force(5, 1, 0.1),
    f2 = formula.force(2, 1, 0.1),
    n = f1 - f2,
    e = 9 + (unit.u[1] * 2)

console.log(`\n F1: ${f1}N\n F2: ${f2}N\n ${f1} - ${f2} = ${n}e${e}N = ${n * 10 ** -3}N`)
const unit = {
    K: 9 * Math.pow(10, 9),

    // Elevado a número positivo.
    G: [Math.pow(10, 9), 9], // giga
    M: [Math.pow(10, 6), 6], // mega
    k: [Math.pow(10, 3), 3], // quilo
    // Elevado a número negativo.
    m: [Math.pow(10, -3), -3], // mili
    u: [Math.pow(10, -6), -6], // micro
    n: [Math.pow(10, -9), -9] // nano
}

function force (firstCharge, secondCharge, distance) {
    const formula = (unit.K * firstCharge * unit.u[0] * secondCharge * unit.u[0]) / distance ** 2
    return formula.toPrecision(2)
}

const firstForce = force(1, 4, 0.1)
const secondForce = force(2, 4, 0.1),
    negative = firstForce - secondForce,
    positive = secondForce - firstForce,
    e = 9 + (unit.u[1] * 2)

function result () {
    return {
        // Eu não sei qual está certa então :v faz parte
        resultNegative: `F1: ${firstForce}N - ${secondForce}N = ${negative}e${e}N = ${(negative * 10 ** -3).toPrecision(2)}`,
        resultPositive: `F1: ${secondForce}N - ${firstForce}N = ${positive}e${e}N = ${(positive * 10 ** -3).toPrecision(2)}`
    }
}

console.log(result())
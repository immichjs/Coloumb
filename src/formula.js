const unit = require('./unit')
const constants = require('./constants')

module.exports = {
    force(Q, q, d) { // Q = Carga 1, q = Carga 2, d = Distancia em metros.
        const f = (constants.k * Q * unit.u[0] * q * unit.u[0]) / d ** 2
        return f.toPrecision(2)
   }
}
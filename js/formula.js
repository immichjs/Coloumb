import { e } from './elements.js'
import { unit, K } from './unit.js'

export function force () {
    const formula = (K[0] * e.firstCharge.value * unit.micro[0] * e.secondCharge.value * unit.micro[0]) / e.distance.value ** 2
    return formula.toPrecision(2)
}

export const elevation = K[1] + (unit.micro[1] * 2)
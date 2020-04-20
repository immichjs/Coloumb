import { e } from './elements.js'
import { unit, K } from './unit.js'

function force () {
    const formula = (K * e.firstCharge.value * unit.micro[0] * e.secondCharge.value * unit.micro[0])
        / e.distanceBetween.value ** 2
    return formula.toPrecision(2)
}

const elevation = 9 + (unit.micro[1] * 2)

function resetValue () {
    e.firstCharge.value = ''
    e.secondCharge.value = ''
    e.distanceBetween.value = ''
}

const info = 'É preciso conter valores válidos.'

export function calculateAForce () {
    if (isNaN(e.firstCharge.value || e.secondCharge.value
        || e.distanceBetween.value)
        || e.firstCharge.value == ''
        || e.secondCharge.value == ''
        || e.distanceBetween.value == '')  {
        alert(info)
    } else {
        let loadForce = force()
        // O uso do .toPrecision() corrige imprecisões da linguagem com valores de ponto flutuante.
        const resulting = (loadForce * 10 ** elevation).toPrecision(2) 
        
        console.log('F = K0Qq % d²')
        console.log(`R: ${loadForce}e${elevation}N = ${resulting}N`)
    }
}
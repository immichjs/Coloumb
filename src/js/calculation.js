import { e } from './elements.js'
import { unit, K } from './unit.js'

function force (index) {
    // F = K0Qq % d²
    const formula = (K * e.firstCharge[index].value * unit.micro[0] * e.secondCharge[index].value * unit.micro[0])
        / e.distanceBetween[index].value ** 2
    return formula.toPrecision(2)
}

let verify

function verifyValue (index) {
    if ((isNaN(e.firstCharge[index].value
        || e.secondCharge[index].value
        || e.distanceBetween[index].value)
        || e.firstCharge[index].value == ''
        || e.secondCharge[index].value == ''
        || e.distanceBetween[index].value == '')) {
        return false
    } else {
        return true
    }
}

const elevation = 9 + (unit.micro[1] * 2)

function resetValue () {
    e.firstCharge.value = ''
    e.secondCharge.value = ''
    e.distanceBetween.value = ''
}

const info = 'É preciso conter valores válidos.'

export function calculateAForce () {
    if (verify = verifyValue(0) == false) {
        window.alert(info)
    } else {
        let loadForce = force(0)
        resetValue()
        // O uso do .toPrecision() corrige imprecisões da linguagem com valores de ponto flutuante
        const resulting = (loadForce * 10 ** elevation).toPrecision(2)
        window.alert(`F = K0Qq%d²\nR: ${loadForce}e${elevation}N = ${resulting}N`)
    }
}

export function calculateTwoForce () {
    if (verify = verifyValue(1) == false) {
        window.alert(info)
    } else {
        let loadForce = []
        loadForce.push(force(1))
        resetValue()

        const innerF2 = e.calculateForce[1]        
        innerF2.setAttribute('id', 'new-calculate-f2')
        innerF2.innerHTML = 'Armazenar F2 e calcular'

        innerF2.onclick = () => {
            if (verify = verifyValue(1) == false) {
                window.alert(info)
            } else {
                loadForce.push(force(1))
                resetValue()

                const resulting = [
                    (loadForce[1] - loadForce[0]).toPrecision(2),
                    ((loadForce[1] - loadForce[0]) * 10 ** elevation).toPrecision(2)
                ]
                window.alert(`F1: ${loadForce[0]}, F2: ${loadForce[1]}\nR: ${resulting[0]}N = ${resulting[1]}N`)
            }
        }
    }
}
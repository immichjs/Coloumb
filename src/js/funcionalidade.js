const firstCharge = document.getElementById('first-charge')
const secondCharge = document.getElementById('second-charge')
const distance = document.getElementById('distance')

const buttonForce1 = document.getElementsByTagName('button')[0]
const buttonForce2 = document.getElementsByTagName('button')[1]

const K = [9 * Math.pow(10, 9), 9]
const mili = [Math.pow(10, -3), -3] // mili
const micro = [Math.pow(10, -6), -6] // micro
const nano = [Math.pow(10, -9), -9] // nano

function force () {
    const formula = (K[0] * firstCharge.value * micro[0] * secondCharge.value * micro[0]) / distance.value ** 2
    return formula.toPrecision(2)
}

const forceCharge = []

buttonForce1.onclick = () => {
    forceCharge.push(force())
    
    buttonForce1.style.display = 'none'
    buttonForce1.style.visibility = 'hidden'
}

buttonForce2.onclick = () => {
    forceCharge.push(force())

    firstCharge.value = ''
    secondCharge.value = ''
    distance.value = ''
    console.log(forceCharge)
    
    const e = K[1] + (micro[1] * 2)

    const negative = [
        forceCharge[0] - forceCharge[1],
        forceCharge[1] - forceCharge[0],
        (forceCharge[0] - forceCharge[1]) * 10 ** e,
        (forceCharge[1] - forceCharge[0]) * 10 ** e,
    ]

    console.log(`Foram retornados Quatro alternativas.\n\n
    Resultante Negativa: ${negative[0]} = ${negative[2].toPrecision(2)}\n
    Resultante Positiva: ${negative[1]} = ${negative[3].toPrecision(2)}`)
}


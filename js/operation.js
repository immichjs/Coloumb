import { e } from './elements.js'
import { force, elevation} from './formula.js'

const loadForce = []

const resetValue = () => {
    e.firstCharge.value = ''
    e.secondCharge.value = ''
    e.distance.value = ''
}

const info = 'É preciso conter valores válidos.'

e.btnF1.onclick = () => {
    if (isNaN(e.firstCharge.value || e.secondCharge.value || e.distance.value) || e.firstCharge.value == '' || e.secondCharge.value == '' || e.distance.value == '')  {
        alert(info)
    } else {
        loadForce.push(force())

        e.btnF1.classList.add('invisible')
        e.btnF2.classList.remove('invisible')
    }
}

e.btnF2.onclick = () => {
    if (isNaN(e.firstCharge.value || e.secondCharge.value || e.distance.value) || e.firstCharge.value == '' || e.secondCharge.value == '' || e.distance.value == '')  {
        alert(info)
    } else {
        loadForce.push(force())
        resetValue()

        console.log('Formula: K.|Q|.|Q| % d²')
        console.log(loadForce)

        const negative = [
            loadForce[0] - loadForce[1],
            loadForce[1] - loadForce[0],
            (loadForce[0] - loadForce[1]) * 10 ** elevation,
            (loadForce[1] - loadForce[0]) * 10 ** elevation,
        ]

        console.log(`Possíveis resultantes:\n\nResultante Negativa: ${negative[0]} = ${negative[2].toPrecision(2)}N\nResultante Positiva: ${negative[1]} = ${negative[3].toPrecision(2)}N`)
    }
}
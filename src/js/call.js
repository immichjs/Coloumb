import { e } from './elements.js'
import { calculateAForce, calculateTwoForce } from './calculation.js'

e.interfaceButtonCalculateForce[0].onclick = () => {
    document.querySelector('.force').classList.toggle('hidden')
}

e.calculateForce[0].onclick = () => calculateAForce()

e.interfaceButtonCalculateForce[1].onclick = () => {
    document.querySelector('.two-force').classList.toggle('hidden')
}

e.calculateForce[1].onclick = () => calculateTwoForce()
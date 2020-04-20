import { e } from './elements.js'
import { calculateAForce } from './calculation.js'

e.interfaceButtonCalculateForce.onclick = () => {
    document.querySelector('.force').classList.toggle('hidden')
}

e.calculateForce.onclick = () => calculateAForce()
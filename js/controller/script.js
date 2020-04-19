import { e } from '../elements.js'
import { force, elevation } from '../formula.js'
import { calcOneForce } from '../operation.js'

e.btn_one_force.onclick = () => {
    document.querySelector('.one-force').classList.remove('hidden')
}

let loadForce = 0

e.calc_force.onclick = () => {
    calcOneForce()
}
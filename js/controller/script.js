import { e } from '../elements.js'
import { calcOneForce } from '../operation.js'

e.btn_one_force.onclick = () => {
    document.querySelector('.one-force').classList.remove('hidden')
}

e.calc_force.onclick = () => {
    calcOneForce()
}
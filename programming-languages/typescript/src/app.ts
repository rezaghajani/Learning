// classes
import {Invoice} from './classes/invoice.js'

const invOne = new Invoice('reza','poole ab',30000)

console.log(invOne.format(),invOne.details)

console.log(invOne)

const form = document.querySelector('.new-item-form')! as HTMLFormElement;

// console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})
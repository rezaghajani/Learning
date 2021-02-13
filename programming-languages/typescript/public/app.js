// classes
import { Invoice } from './classes/invoice.js';
const invOne = new Invoice('reza', 'poole ab', 30000);
console.log(invOne.format(), invOne.details);
console.log(invOne);
const form = document.querySelector('.new-item-form');
// console.log(form.children)
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

import '../style.css'

const valuea = document.getElementById('valuea') as HTMLInputElement;
const valueb = document.getElementById('valueb') as HTMLInputElement;
const valuec = document.getElementById('valuec') as HTMLInputElement;
const valued = document.getElementById('valued') as HTMLInputElement;

const button = document.querySelector('button') as HTMLButtonElement;
button.addEventListener('click', () => {
const a = parseFloat(valuea.value);
})
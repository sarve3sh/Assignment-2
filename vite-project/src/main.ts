import '../style.css'

const valuea = document.getElementById('valuea') as HTMLInputElement;
const valueb = document.getElementById('valueb') as HTMLInputElement;
const valuec = document.getElementById('valuec') as HTMLInputElement;
const valued = document.getElementById('valued') as HTMLInputElement;

const button = document.querySelector('button') as HTMLButtonElement;
button.addEventListener('click', () => {
const a = parseFloat(valuea.value);
const b = parseFloat(valueb. value);
const c = parseFloat(valuec. value);
const d = parseFloat(valued. value);
});

function solveCubic(a: number, b: number, c: number, d: number): number[]{
    const p = ((3*a*c-b**2)/(3*a**2))
    const q = ((27*a**2*d-9*a*b*c+2*b**3)/(27*a**3))
    const discriminant = (q/2)**2 + (p/3)**2
    if (discriminant>0){
        //case a
    }
    else if (discriminant==0){
        //case b
    }
    else if (discriminant<0){
        //case c
    }
    return [];
}
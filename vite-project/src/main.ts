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
    const discriminant = (q/2)**2 + (p/3)**3
    if (discriminant>0){
        const root = Math.cbrt(-q/2+Math.sqrt(discriminant)) + Math.cbrt(-q/2-Math.sqrt(discriminant)) - b/(3*a)
        return [root];
    }
    else if (discriminant===0){
        if (q===0 && p===0){
        const root = -b/(3*a)
        return [root,root,root];
    }else{
       const doubleRoot = 3*q/p-b/(3*a)
       const singleRoot = -3*q/(2*p)-b/(3*a)
       return [doubleRoot, doubleRoot, singleRoot];
    }
    } 
    return[];
}
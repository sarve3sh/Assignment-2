import '../style.css'
const result_table = document.getElementById('result-table') as HTMLInputElement;
const valuea = document.getElementById('valuea') as HTMLInputElement;
const valueb = document.getElementById('valueb') as HTMLInputElement;
const valuec = document.getElementById('valuec') as HTMLInputElement;
const valued = document.getElementById('valued') as HTMLInputElement;

const button = document.querySelector('button') as HTMLButtonElement;
button.addEventListener('click', () => {
    const a = parseFloat(valuea.value);
    const b = parseFloat(valueb.value);
    const c = parseFloat(valuec.value);
    const d = parseFloat(valued.value);
    const result = solveCubic(a, b, c, d);
    result_table.innerHTML = `
    <table>
        <tr><td>p</td><td>${result.p}</td></tr>
        <tr><td>q</td><td>${result.q}</td></tr>
        <tr><td>Discriminant</td><td>${result.discriminant}</td></tr>
    </table>`
    
    
});

function solveCubic(a: number, b: number, c: number, d: number): (number|string)[] {
    const p = ((3 * a * c - b ** 2) / (3 * a ** 2))
    const q = ((27 * a ** 2 * d - 9 * a * b * c + 2 * b ** 3) / (27 * a ** 3))
    const discriminant = (q / 2) ** 2 + (p / 3) ** 3
    let roots:(number|string)[]=[]
    if (discriminant < 0) { //case A Trignometric method
        const k = 2*Math.sqrt(-p/3)
        const theta = (1/3)*Math.acos(-q/(k/2)**3)

        const y1 = k*Math.cos(theta)
        const y2 = k*Math.cos(theta+(2*Math.PI/3))
        const y3 = k*Math.cos(theta+(4*Math.PI/3))

        const x1 = y1-(b/(3*a))
        const x2 = y2-(b/(3*a))
        const x3 = y3-(b/(3*a))
        return[x1,x2,x3]
     }
    else if (discriminant === 0) {
        if(p==0&&q==0){
        const x1 = Math.cbrt((-q/2)+Math.sqrt((q/2)**2 + (p/3)**3)) + Math.cbrt((-q/2)-Math.sqrt((q/2)**2 + (p/3)**3)) - (b/(3*a))
        return [x1,x1,x1]
        }
        else{
        const x1 = Math.cbrt((-q/2)+Math.sqrt((q/2)**2 + (p/3)**3)) + Math.cbrt((-q/2)-Math.sqrt((q/2)**2 + (p/3)**3)) - (b/(3*a)) //finds both x1 and x3
        const x2 = Math.cbrt(q/2)-(b/(3*a))
        return [x1,x1,x2]
        }
     }
    else { 
        const x1 = Math.cbrt((-q/2)+Math.sqrt((q/2)**2 + (p/3)**3)) + Math.cbrt((-q/2)-Math.sqrt((q/2)**2 + (p/3)**3)) - (b/(3*a))
        return [x1,"Complex Number","Complex Number"]
    }
    
}


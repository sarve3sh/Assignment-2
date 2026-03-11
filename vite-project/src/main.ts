import '../style.css'
const result_table = document.getElementById('result-table') as HTMLInputElement;
const valuea = document.getElementById('valuea') as HTMLInputElement;
const valueb = document.getElementById('valueb') as HTMLInputElement;
const valuec = document.getElementById('valuec') as HTMLInputElement;
const valued = document.getElementById('valued') as HTMLInputElement;
const canvas = document.getElementById('graph') as HTMLCanvasElement
const formula = document.getElementById('formula') as HTMLElement
const ctx = canvas.getContext('2d')!

const button = document.querySelector('button') as HTMLButtonElement;
button.addEventListener('click', (event) => {
    event.preventDefault()
    const a = parseFloat(valuea.value);
    const b = parseFloat(valueb.value);
    const c = parseFloat(valuec.value);
    const d = parseFloat(valued.value);
    const result = solveCubic(a, b, c, d);
    formula.innerText = `${a}x³ + ${b}x² + ${c}x + ${d} = 0`
    result_table.innerHTML =`
    <table>
        <tr><td>p</td><td>${result.p}</td></tr>
        <tr><td>q</td><td>${result.q}</td></tr>
        <tr><td>Discriminant</td><td>${result.discriminant}</td></tr>
        <tr><td>Root 1</td><td>${result.roots[0]}</td></tr>
        <tr><td>Root 2</td><td>${result.roots[1]}</td></tr>
        <tr><td>Root 3</td><td>${result.roots[2]}</td></tr>
        <tr><td>p</td><td>${result.p.toFixed(5)}</td></tr>
        <tr><td>q</td><td>${result.q.toFixed(5)}</td></tr>
        <tr><td>Discriminant</td><td>${result.discriminant.toFixed(5)}</td></tr>
    </table>`
  
ctx.clearRect(0, 0, canvas.width, canvas.height)

const w = canvas.width
const h = canvas.height
const scale = 50
const cx = w / 2  
const cy = h / 2  


ctx.strokeStyle = '#ddd'
ctx.lineWidth = 1
for (let i = 0; i < w; i += scale) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, h); ctx.stroke()
}
for (let i = 0; i < h; i += scale) {
    ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(w, i); ctx.stroke()
}


ctx.strokeStyle = '#000'
ctx.lineWidth = 2
ctx.beginPath()
ctx.moveTo(cx, 0); ctx.lineTo(cx, h) 
ctx.moveTo(0, cy); ctx.lineTo(w, cy)  
ctx.stroke()


ctx.strokeStyle = '#7f0000'
ctx.lineWidth = 2
ctx.beginPath()
for (let px = 0; px < w; px++) {
    const x = (px - cx) / scale
    const y = a*x**3 + b*x**2 + c*x + d
    const py = cy - y * scale
    if (px === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
}
ctx.stroke()


result.roots.forEach(root => {
    if (typeof root === 'number') {
        const px = cx + root * scale
        const py = cy  
        ctx.beginPath()
        ctx.arc(px, py, 5, 0, Math.PI * 2)
        ctx.fillStyle = '#00fa1d'
        ctx.fill()
        ctx.strokeStyle = '#000'
        ctx.lineWidth = 1
        ctx.stroke()
    }
})
});

function solveCubic(a: number, b: number, c: number, d: number){
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
        return { p, q, discriminant, roots: [x1, x2, x3] }
     }
    else if (discriminant === 0) {
        if(p==0&&q==0){
        const x1 = Math.cbrt((-q/2)+Math.sqrt((q/2)**2 + (p/3)**3)) + Math.cbrt((-q/2)-Math.sqrt((q/2)**2 + (p/3)**3)) - (b/(3*a))
        return {p,q, discriminant, roots:[x1,x1,x1]}
        }
        else{
        const x1 = Math.cbrt((-q/2)+Math.sqrt((q/2)**2 + (p/3)**3)) + Math.cbrt((-q/2)-Math.sqrt((q/2)**2 + (p/3)**3)) - (b/(3*a)) //finds both x1 and x3
        const x2 = Math.cbrt(q/2)-(b/(3*a))
        return {p,q, discriminant, roots:[x1,x1,x2]}
        }
     }
    else { 
        const x1 = Math.cbrt((-q/2)+Math.sqrt((q/2)**2 + (p/3)**3)) + Math.cbrt((-q/2)-Math.sqrt((q/2)**2 + (p/3)**3)) - (b/(3*a))
        return {p,q, discriminant, roots:[x1,"Complex Number","Complex Number"]}    
    }
}



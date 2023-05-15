const container = document.querySelector('.container')

const gridSize = 16
let width = 600 / gridSize
for (let i=0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div')
        div.classList.add('square')
        div.style.width = `${width}px`
        div.style.height = `${width}px`
        
        container.appendChild(div)
        
    }
    


const divs = document.querySelectorAll('.square')

divs.forEach(item => item.addEventListener('mouseover', e => {
    e.target.classList.add('black') 
}, {capture: true}))
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
    

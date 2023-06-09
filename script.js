

function createGrids(gridSize) {
    // Set Specify chosen grid size
    let gridTotal = document.querySelector('#grid-total')
    gridTotal.textContent = gridSize


    let width = 700 / gridSize
    for (let i = 0; i < gridSize * gridSize; i++) {

        let cell = document.createElement('div')

        cell.classList.add('cell')
        cell.style.width = `${width}px`
        cell.style.height = `${width}px`

        container.appendChild(cell)
    }


    // Style background-color when mouse hover ends
    hoverStyling()

    // Remove all background styling
    const restart = document.querySelector('#restart')
    restart.addEventListener('click', removeBackgroundColor)
}


function hoverStyling() {
    let cells = document.querySelectorAll('.cell')
    let cellColor = document.querySelector('#cell-color')
    let rgb = document.querySelector('#rgb')

    cells.forEach(item => item.addEventListener('mouseout', e => {
        let cellStyle = e.target.style;

        if (!cellStyle.backgroundColor) {
            cellStyle.backgroundColor = (rgb.checked) ? randomColor() : cellColor.value

        }

    }))

}

function removeGrid() {
    let cells = document.querySelectorAll('.cell')
    cells.forEach(item => container.removeChild(item))
}


function removeBackgroundColor() {
    let cells = document.querySelectorAll('.cell')
    cells.forEach(cell => cell.style.backgroundColor = '')
}


function randomColor() {
    let red = Math.floor(Math.random() * 255) + 1
    let green = Math.floor(Math.random() * 255) + 1
    let blue = Math.floor(Math.random() * 255) + 1

    let randomColor = `rgb(${red},${green},${blue})`
    return randomColor

}

function randomizeCellsBackground() {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(item => item.style.backgroundColor = randomColor())
}





const container = document.querySelector('.container')
const gridRange = document.querySelector('#grid-count')

const randomize = document.querySelector('#randomize')
randomize.addEventListener('click', randomizeCellsBackground)


createGrids(gridRange.value)


gridRange.addEventListener('change', e => {

    removeGrid()
    createGrids(gridRange.value)
})




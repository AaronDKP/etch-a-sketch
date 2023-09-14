const gridContainer = document.querySelector('#gridContainer');
const resizeButton = document.querySelector('#resizeButton');

for (let i = 0; i < 16; i++){
    const row = document.createElement('div');

    row.classList.add('rowDiv');

    gridContainer.appendChild(row);

    for (let i = 0; i < 16; i++){
        const div = document.createElement('div');
        div.classList.add('gridDiv', 'classicHover');
        row.appendChild(div);
    }
}


function resizePrompt () {
   let input = prompt('Enter number of blocks on each axis');

    if(isNaN(input)) {
        alert('Please enter a number');
        return 16;
    } else if (input > 100) {
        alert('Please enter a number below 100');
        return 16;
    } else if (input === null || input === undefined || input === ''){
        alert('Please enter a number');
        return 16;
    } else {
        return input;
    }

}


resizeButton.addEventListener('click', () => {
    document.querySelectorAll('.gridDiv').forEach(e => e.remove());
    document.querySelectorAll('.rowDiv').forEach(e => e.remove());

    let gridSize = resizePrompt();

    for (let i = 0; i < gridSize; i++){
        const row = document.createElement('div');
    
        row.classList.add('rowDiv');
    
        gridContainer.appendChild(row);
    
        for (let i = 0; i < gridSize; i++){
            const div = document.createElement('div');
            div.classList.add('gridDiv', 'classicHover');
            row.appendChild(div);
        }
    }
})


function colorGen() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

const rainbowButton = document.querySelector('#rainbowButton');
const classicButton = document.querySelector('#classicButton');
const modernButton = document.querySelector('#modernButton');


rainbowButton.addEventListener('click', () => {
    const gridDiv = document.querySelectorAll('.gridDiv');
    gridDiv.forEach(e => e.classList.remove('classicHover'));
    gridDiv.forEach(e => e.classList.add('rainbowHover'));

    const rainbowHover = document.querySelectorAll('.rainbowHover');

    //trying to clear opacity once on press of button

    for (div of rainbowHover) {
        div.addEventListener('mouseover', function() {
            this.style.transition = '0.01s';
            this.style.backgroundColor = `${colorGen()}`;
            this.style.opacity -= '-0.1';
        })
    
        div.addEventListener('mouseleave', function() {
            this.style.transition = '6s';
            this.style.backgroundColor = '#f9f1f1';
        })
    }
})

classicButton.addEventListener('click', () => {
    const gridDiv = document.querySelectorAll('.gridDiv');
    gridDiv.forEach(e => e.classList.remove('rainbowHover'));
    gridDiv.forEach(e => e.classList.add('classicHover'));

    const classicHover = document.querySelectorAll('.classicHover');

    for (div of classicHover) {
        div.addEventListener('mouseover', function() {
            this.style.backgroundColor = `#000`;
            this.style.opacity -= '-0.1';
        })
    }
})

modernButton.addEventListener('click', () => {
    const gridDiv = document.querySelectorAll('.gridDiv');
    gridDiv.forEach(e => e.classList.remove('rainbowHover'));
    gridDiv.forEach(e => e.classList.add('classicHover'));

    const classicHover = document.querySelectorAll('.classicHover');

    for (div of classicHover) {
        div.addEventListener('mouseover', function() {
            this.style.backgroundColor = `#000`;
            this.style.opacity = '1';
        })
    }
})


  // create button that removes classicHover class from gridDivs
  // then using eventLIstener adds a mouseover function to show random colour above
  // make other button for the opacity option
  // make each colour option button remove the other's features
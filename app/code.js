'use strict';

let rows = 24,
    cols = 24
;

function initialize() {
    createTable();
}

function createTable() {
    let gridContainer = document.getElementById('gridContainer'),
        table         = document.createElement('table')
    ;
    if (!gridContainer) {
        console.error('No DIV for grid table!');
    }

    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr')
        ;
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('td')
            ;
            cell.setAttribute('id', i + '_' + j);
            cell.onclick = cellClickHandler;
            console.dir(cell);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    gridContainer.appendChild(table);
}

function cellClickHandler() {
    this.classList.toggle('live');
}

window.onload = initialize;

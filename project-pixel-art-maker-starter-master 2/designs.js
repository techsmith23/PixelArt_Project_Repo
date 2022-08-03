// Variable To Choose The Size Of The Grid: 
const sizePicker = document.querySelector('#sizePicker');

// Variable Of the Design Canvas: 
const table = document.querySelector('#pixelCanvas');

//Default Size: 
makeGrid(10, 10);


// #1. Submit The Size Of The Grid: 

sizePicker.addEventListener('submit', function (event) {

    // #1. Clear Table:
       event.preventDefault();
       
       while(table.hasChildNodes()){
            table.removeChild(table.firstChild)
       }

    // #2. Apply The User's Size:
    const height = document.querySelector('#inputHeight');
    const width = document.querySelector('#inputWidth');
    makeGrid(height.value, width.value);

});


// #2. When Grid Size is submitted by the user, call makeGrid():
function makeGrid(height, width) {

        for(let y = 0; y < height; y++){

              let row = table.insertRow(y);

              for (let x = 0; x < width; x++){

                let cell = row.insertCell(x);

                // Set Colors To Cell: 

                cell.style.backgroundColor = "white";
                cell.addEventListener('click', function (event) {

                    event.preventDefault();
                    const color = document.querySelector('#colorPicker');
                    cell.style.backgroundColor = color.value;

                });

              }

        }



}

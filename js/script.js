const body = document.querySelector('body');  

const container = document.createElement('div'); // create the container
container.classList.add('container');
body.appendChild(container);

const btn = document.querySelector('.btn'); // el button

let initNum = 16;  // init grid number


function createHorizontalSquare(num){ // creates the horizontal divs
    
    for(i=0 ; i<num ; i++){ 
        const boxHo = document.createElement('div');
        boxHo.classList.add('boxHo');
        container.appendChild(boxHo);
    };
}
createHorizontalSquare(initNum);


let nodeBoxHo = document.querySelectorAll('.boxHo'); // get a node list of the horizontal divs to be used in creating vertical divs 
// console.log(nodeBoxHo.length);


function createVericalSquare(num,horizontalNode){  // creates vertical divs
    horizontalNode.forEach(boxH => {  // for each horizontal div create n number of vertical divs
        for(i=0; i<num ; i++){
            const boxVe = document.createElement('div');
            boxVe.classList.add('boxVe');
            boxH.appendChild(boxVe);
            
            boxVe.onmouseover  = ()=>   // event listener to hover
            boxVe.style.backgroundColor = 'black'; // change background when hover
            
        };        
    });    
    
}
createVericalSquare(initNum,nodeBoxHo);





function removeSquares(){ //removes the grid
    let targetNode = document.querySelectorAll('.boxHo');
    targetNode.forEach(box => {  //loops around the container elements and removes all divs
        container.removeChild(box); 
    });    
}

function buttonClicked(){
    let userNum = prompt('Enter your number');
    removeSquares();
    
    createHorizontalSquare(userNum);
    const newHoNode = document.querySelectorAll('.boxHo'); 
    createVericalSquare(userNum,newHoNode);
    
}
btn.addEventListener('click',buttonClicked);
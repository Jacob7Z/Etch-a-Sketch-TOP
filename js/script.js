const body = document.querySelector('body');  

const container = document.createElement('div'); // create the container
container.classList.add('container');
body.appendChild(container);

let num = 20;  // grid number


function createHorizontalSquare(num){ // creates the horizontal divs
    
    for(i=0 ; i<num ; i++){ 
        const boxHo = document.createElement('div');
        boxHo.classList.add('boxHo');
        container.appendChild(boxHo);
    };
}
createHorizontalSquare(num);


let nodeBoxHo = document.querySelectorAll('.boxHo'); // get a node list of the horizontal divs to be used in creating vertical divs 
console.log(nodeBoxHo.length);


function createVericalSquare(num){  // creates vertical divs
    nodeBoxHo.forEach(boxH => {  // for each horizontal div create n number of vertical divs
        for(i=0; i<num ; i++){
            const boxVe = document.createElement('div');
            boxVe.classList.add('boxVe');
            boxH.appendChild(boxVe);
            
            boxVe.onmouseover  = ()=>   // event listener to hover
            boxVe.style.backgroundColor = 'black'; // change background when hover
            
        };        
    });    
    
}
createVericalSquare(num);




const body = document.querySelector('body');  

const container = document.createElement('div'); // create the container
container.classList.add('container');
body.appendChild(container);

let num = 20;  


function createHorizontalSquare(num){
    
    for(i=0 ; i<num ; i++){
        const boxHo = document.createElement('div');
        boxHo.classList.add('boxHo');
        container.appendChild(boxHo);
    };
}
createHorizontalSquare(num);


let nodeBoxHo = document.querySelectorAll('.boxHo'); 
console.log(nodeBoxHo.length);


function createVericalSquare(num){
    nodeBoxHo.forEach(boxH => {
        for(i=0; i<num ; i++){
            const boxVe = document.createElement('div');
            boxVe.classList.add('boxVe');
            boxH.appendChild(boxVe);
        };        
    });    
    
}
createVericalSquare(num);








// for(i=0 ; i<num ; i++){
//     const boxHo = document.createElement('div');
//     boxHo.classList.add('boxHo');
//     container.appendChild(boxHo);
    
//     if(nodeBoxHo.length < num){
//         continue;
//     }else{
//         for(i=0; i<num ; i++){
//             const boxVe = document.createElement('div');
//             boxVe.classList.add('boxVe');
//             boxHo.appendChild(boxVe);
//         }
//     };
// };


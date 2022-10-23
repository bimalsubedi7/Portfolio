// let card = document.querySelectorAll('.about-card');
// let expand = document.querySelectorAll('.expand');
// let closeBtn = document.querySelectorAll('.close');

// card.forEach(function(){
//     this.addEventListener("click", expandDiv(expand))
// })


// function expandDiv(expand) {
//     expand.forEach(function() {
//         this.classList.add('expands');
//     });
    
// }


// // for (j = 0; j < expand.length; j++) {
// //     expand[j].classList.add('expands');
// // }





let firstCard = document.querySelector('.firatCard');
let firstExpand = document.querySelector('.firstExpand');
let firstClose = document.querySelector('.firstClose');


firstCard.addEventListener('click', function(){
    firstExpand.classList.add('expands');
})

firstClose.addEventListener('click', function(){
    firstExpand.classList.remove('expands');
})


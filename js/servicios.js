let items = document.querySelectorAll('.slider1 .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;
function loadShow(){
    let stt = 1;
    for(var i  = active + 1; i< items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
    }
}
loadShow();
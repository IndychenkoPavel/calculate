
let btn = document.getElementById('btn');
let labMin = document.getElementById('lab-min');
let labMax = document.getElementById('lab-max');
let labNbr = document.getElementById('lab-nbr');
let win = document.querySelector('.winner');
let attempt = document.querySelector('#inner-attempt');
let winVal = document.querySelector('#inner-val');
let val = 0;
let winV = 0;


btn.addEventListener('click', myFN);

function myFN (e) {
    e.preventDefault();
    let min = document.getElementById('min-number').value;
    let max = document.getElementById('max-number').value;
    let numb = document.getElementById('number').value;

    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumb =  Math.floor(Math.random() * (max - min + 1)) + min;

    if (!min && !max && !numb) { 
        labMin.innerHTML = 'введите число';
        labMax.innerHTML = 'введите число';
        labNbr.innerHTML = 'введите число';
    } else if(!min) {
        labMin.innerHTML = 'введите число';
    } else if(!max) {
        labMax.innerHTML = 'введите число';
    } else if(!numb) {
        labNbr.innerHTML = 'введите число';
    }else{
        val ++;
        attempt.innerHTML = `${val}`;
    }

    if (randomNumb == numb) {
        win.innerHTML = "You Win!!!"
        winV ++;
        winVal.innerHTML = `${winV}`;
    } else {
        win.innerHTML = "Sorry!!!"
    }

};
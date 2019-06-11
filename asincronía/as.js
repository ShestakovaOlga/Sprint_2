/*let counter = 0;

const incrementAndShowCounter = () => {
    counter++;
    const time = document.querySelector('.time');
    time.innerHTML = counter;
}

setInterval(incrementAndShowCounter, 1000);*/

/*
let counter = 0;
let temp;

const show12 = () => {
    counter++;
    const time = document.querySelector('.time');
    time.innerHTML = counter;
    if (counter === 12) {
        clearInterval(temp);
    }
}

temp = setInterval(show12, 1000);*/

/*const showMsg = () => {
    alert('su sesión ha expirado');
}

setTimeout(showMsg, 15000);*/

let c = 0;
let t;
let timer_is_on = false;
const startButton = document.querySelector('.start')
const stopButton = document.querySelector('.stop')

function timeCount() {
    document.getElementById("txt").value = c;
    c = c + 1;
    t = setTimeout(timeCount, 1000);
}

startButton.addEventListener('click', function startCount() {
    if (!timer_is_on) {
        timer_is_on = true;
        timeCount();
    }
})

stopButton.addEventListener('click', function stopCount() {
    clearTimeout(t);
    timer_is_on = false;
})
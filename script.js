const displayDiv = document.querySelector(".display");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const stopBtn = document.getElementById("stop-btn");
const countBtn = document.getElementById("count-btn");
const clearBtn = document.getElementById("clear-btn");
const containerDiv = document.querySelector(".container");
let countBtnClicked = 0;
let msCountDown = -19800000;
let secCountDown = "00";
let minCountDown = "00";
let hourCountDown = "00";


let time;
startBtn.addEventListener("click", () => {
    time = setInterval(() => {
        msCountDown += 1000;
        secCountDown = new Date(msCountDown).getSeconds();
        minCountDown = new Date(msCountDown).getMinutes();
        hourCountDown = new Date(msCountDown).getHours();
        secCountDown = (secCountDown < 10)? "0" + secCountDown : secCountDown;
        minCountDown = (minCountDown < 10)? "0" + minCountDown : minCountDown;
        hourCountDown = (hourCountDown < 10)? "0" + hourCountDown : hourCountDown;
        displayDiv.innerText = `${hourCountDown}:${minCountDown}:${secCountDown}`;
    }, 1000);
});


resetBtn.addEventListener("click", () => {
    msCountDown = -19800000;
    secCountDown = "00";
    minCountDown = "00";
    hourCountDown = "00";
    displayDiv.innerText = `00:00:00`;
    setTimeout(() => {
        clearInterval(time);
    }, 0);
});

stopBtn.addEventListener("click", () => {
    setTimeout(() => {
        clearInterval(time);
    }, 0);
});

countBtn.addEventListener("click", () => {
    countBtnClicked++;
    if(countBtnClicked > 6){
        clearContainer();
    }
    let containerEle = document.createElement("div");
    containerEle.classList.add("container-element");
    containerEle.innerHTML = `<p>${hourCountDown}:${minCountDown}:${secCountDown}</p>`;
    containerDiv.append(containerEle);
});

const clearContainer = () => {
    containerDiv.innerHTML = ``;
    countBtnClicked = 0;
};

clearBtn.addEventListener("click", clearContainer);
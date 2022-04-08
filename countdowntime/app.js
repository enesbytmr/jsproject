

//buttons 
const stopButton = document.getElementById('stopButton')
const startButton = document.getElementById('startButton')
const resetButton = document.getElementById('resetButton')
const lapButton = document.getElementById('lapButton');
const timer = document.getElementById('stopWatch')
const addTable = document.getElementById('addTable')

//stopwatch requirements

let sec = 00
let min = 00
let hr  = 00
let stopTime = true;
let count =0 ;
let timerCycle = ()=> {
    if (stopTime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
    
        sec = sec + 1;
    
        if (sec == 60) {
          min = min + 1;
          sec = 0;
        }
        if (min == 60) {
          hr = hr + 1;
          min = 0;
          sec = 0;
        }
    
        if (sec < 10 || sec == 0) {
          sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
          min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
          hr = '0' + hr;
        }
    
         timer.innerHTML = hr + ':' + min + ':' + sec;
    
        setTimeout("timerCycle()", 1000);
      }
    }





// start 
let startTimer = () =>{
    if(stopTime == true){
        stopTime = false ;
        timerCycle();
    }
}

// stop
let stopTimer = ()=>{
    if(stopTime == false){
        stopTime = true;
    }
}

//reset
let resetTimer = () => {
    timer.innerHTML = '00:00:00'
    stopTime = true

}


// Lap
//table => add table elements 

let counter = ()=>{
    count += 1
}
let lapNumber = lapButton.addEventListener('click',counter)
let lapTime =() => {
   let lapNow = `<tr><th scope="row">Lap ${count}</th><td>${hr} : ${min} : ${sec} </td><td></td></tr>`;
    addTable.innerHTML += lapNow;
  }






//
//start
startButton.addEventListener('click',startTimer)
//stop
stopButton.addEventListener('click',stopTimer)
//reset
resetButton.addEventListener('click',resetTimer)
//lap
lapButton.addEventListener('click',lapTime)

'use strict';
// all variables here

const myTitle = document.querySelector('#title');

let score = 20;
let highscore = 0;

const snumber = document.querySelector
('.number'); 
let secretNumber = Math.floor(Math.random()*20)+1
// Math.trunc(Math.random()*20)+1;
// end variables
// snumber.innerHTML = secretNumber;
 
const displayMessage= function (msg) {
    return document.querySelector('.message').innerHTML =msg;
}

const changeBgColor = function(color){
    return document.querySelector('body').style.backgroundColor =color;
}


document.querySelector('.check').addEventListener('click',function(){ 
    const guess= Number(document.querySelector('.guess').value);
    // console.log(guess,);

    if(!guess){
        displayMessage('no Number');
        changeBgColor("orange");
    }else if(guess==secretNumber){
        displayMessage('correct');
        changeBgColor("green");
        if(score > highscore){
            highscore=score;
            document.querySelector('.highscore').innerHTML= highscore;
        }else{

        }
    }else{
        // displayMessage('not correct');
        changeBgColor("red");
        displayMessage(guess>secretNumber ? 'number too high':'number too low');
        score--;
        document.querySelector('.score').innerHTML=score;
        // if(guess>secretNumber){
        //     displayMessage('number too high');
        // }else{
        //     displayMessage();
        // }

    }
  

    


});

 
document.querySelector('.again').addEventListener('click', function(){
    changeBgColor('black');
    document.querySelector('.score').innerHTML=20;
    document.querySelector('.highscore').innerHTML=0;
    displayMessage('Start guessing...');
});





'use strict';
// all variables here

const myTitle = document.querySelector('#title');
const checkBtn = document.querySelector('.check');
const innputField = document.querySelector('.guess');
const snumber = document.querySelector('.number');
const mymessage = document.querySelector('.message');
let randomnumber =Math.trunc(Math.random()*20)+1;
// end variables
snumber.innerHTML = randomnumber
 



checkBtn.addEventListener('click',function(){ 
    if (!innputField.value) {
        mymessage.innerHTML ='empty';
        document.querySelector('body').style.backgroundColor  ="red";

    } else if (randomnumber==innputField.value) {
        mymessage.innerHTML ='correct';
        document.querySelector('body').style.backgroundColor  ="green";
    }else{ 
        mymessage.innerHTML ='not correct';
        document.querySelector('body').style.backgroundColor  ="red";

    }
        
  

    


});
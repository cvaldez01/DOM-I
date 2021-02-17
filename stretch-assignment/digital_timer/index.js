
const button =document.createElement('button');
const digits = document.getElementsByClassName('digits')
const digit = document.getElementsByClassName('digit');
const secondTens =document.getElementById('secondTens');
const secondOnes =document.getElementById('secondOnes');
const colon = document.getElementById('colon');
const msHundreds = document.getElementById('msHundreds');
const msTens =document.getElementById('msTens');

 

const timer = setInterval(counter(),1000);
 
function counter(){
    let t = new Date();
    let d = t.toLocaleTimeString();
    secondTens.innerHTML = d;
}

 



    digits.appendChild(secondTens);
    digits.appendChild(button);
    digits.appendChild(secondOnes);
    digits.appendChild(colon);
    digits.appendChild(msHundreds);
    digits.appendChild(msTens);

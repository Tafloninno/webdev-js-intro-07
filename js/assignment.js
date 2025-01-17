"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

function returnTheRemainder(a,b){
    return a % b
}
let remainder = returnTheRemainder(5,4)

function checkEven(num){
    if(num % 2 === 0){
        return true
    }else{
        return false
    }
}
let isEven = checkEven(47)

function  getTheFourthElement(){
    return lostNumbers[3]; 
}


function render(){
    remainderElement.innerText = remainder
    checkIfEvenElement.innerText = isEven
    lostNumbersElement.innerText = getTheFourthElement()

}

submissionBtn.addEventListener('click', function(){
    render()
})
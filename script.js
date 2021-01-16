class calculator{
    constructor(prevButtons,currentButtons){
        this.prevButtons=prevButtons;
        this.currentButtons=currentButtons;
        this.clear();
    }

    clear(){
        this.currentOperand='';
        this.prevOperand='';
        this.operation=undefined;
    }

    delete(){}

    chooseOperation(operation){}

    appendNumber(number){
        this.currentOperand=number;
    }

    compute(){}

    updateDisplay(){
        this.currentButtons.innerText=this.currentOperand;
    }
}
const numberButtons=document.querySelectorAll('[data-number]');
const operationButtons=document.querySelectorAll('[data-operation]');
const equalButtons=document.querySelectorAll('[data-equals]');
const deleteButtons=document.querySelectorAll('[data-delete]');
const allClearButtons=document.querySelectorAll('[data-ac]');
const prevButtons=document.querySelectorAll('[data-prev]');
const currentButtons=document.querySelectorAll('[data-current]');

const claculator=new calculator(prevButtons,currentButtons);

numberButtons.forEach(button =>{
    button.addEventListener('click' ,()=>{
        claculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})









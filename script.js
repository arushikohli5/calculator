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
        if(number==='.'&& this.currentOperand.includes('.')) return;
        this.currentOperand=this.currentOperand.toString()+number.toString();
    }

    compute(){}

    updateDisplay(){
        this.currentButtons.innerText=this.currentOperand;
    }
}
const numberButtons=document.querySelectorAll('[data-number]');
const operationButtons=document.querySelectorAll('[data-operation]');
const equalButtons=document.querySelector('[data-equals]');
const deleteButtons=document.querySelector('[data-delete]');
const allClearButtons=document.querySelector('[data-ac]');
const prevButtons=document.querySelector('[data-prev]');
const currentButtons=document.querySelector('[data-current]');

const claculator=new calculator(prevButtons,currentButtons);

numberButtons.forEach(button =>{
    button.addEventListener('click' ,()=>{
        claculator.appendNumber(button.innerText)
        claculator.updateDisplay();
    })
})









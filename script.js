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

    chooseOperation(operation){
        if(this.currentOperand==='') return;
        if(this.prevOperand!==''){
            this.compute();
        }
        this.operation=operation;
        this.prevOperand=this.currentOperand;
        this.currentOperand='';
    }

    appendNumber(number){
        if(number==='.'&& this.currentOperand.includes('.')) return;
        this.currentOperand=this.currentOperand.toString()+number.toString();
    }

    compute(){
        let computation;
        const prev=parseFloat(this.prevOperand);
        const current=parseFloat(this.currentOperand);
        if(NaN(prev)||NaN(current))return;

        switch(this.operation){
            case '+':
                computation=prev+current;
                break;
            
            case '':
                computation=prev-current;
                break;

            case '*':
                computation=prev*current;
                break;

            case '/':
                computation=prev/current;
                break;

            default:
                return;

        }
        this.currentOperand=computation;
        this.operation=undefined;
        this.prevOperand='';
    }

    updateDisplay(){
        this.currentButtons.innerText=this.currentOperand;
        this.prevButtons.innerText=this.prevOperand;
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
        claculator.appendNumber(button.innerText);
        claculator.updateDisplay();
    });
});

operationButtons.forEach(button =>{
    button.addEventListener('click' ,()=>{
        claculator.chooseOperation(button.innerText);
        claculator.updateDisplay();
    });
});

equalButtons.addEventListener('click',button =>{
    claculator.compute();
    claculator.updateDisplay();
})






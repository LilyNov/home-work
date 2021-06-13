
const prevElement = document.querySelector('[data-prev]');
const currentElement = document.querySelector('[data-current]');
const btnClearElement = document.querySelector('[data-ac]');
const btnDeleteElement = document.querySelector('[data-del]');
const btnOperationsElements = document.querySelectorAll('[data-operation]');
const btnNumbersElements = document.querySelectorAll('[data-num]');
const btnEqualElement = document.querySelector('[data-equal]');
const btnVigElement = document.querySelector('[data-vig]')


class Calculator {
    constructor(prevElement, currentElement) {
        this.prevElement = prevElement;
        this.currentElement = currentElement;
        this.clear()
    }

    clear () {
        this.prevOperand = '';
        this.currentOperand = '';
        this.operation = null;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNum(number) {
        if(number === '.' && this.currentOperand.includes('.')) {
            return
        }
        if(this.currentOperand.length >= 10) {
             this.currentOperand = this.currentOperand.substring(0, 10); // max 10 numbers on display
            
        }

        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') {
            return
        }
        if (this.prevOperand !== '') {
            this.compute()
        }
       this.operation = operation ;
       this.prevOperand = this.currentOperand;
       this.currentOperand = '';
    }

    compute() {
        let computed;
        const prev = parseFloat(this.prevOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) {
            return 
        }

        switch (this.operation) {
            case '÷':
                computed = prev / current;
                break;
            case '×':
                computed = prev * current;
                break;
            case '-':
                computed = prev - current;
                break;
            case '+':
                computed = prev + current;
                break;
            default:
                break;
        }
        console.log(computed);
        
        this.currentOperand = computed.toString().substring(0, 10);
        this.operation = null;
        this.prevOperand = '';
    }

    computeVig() {
        let computed;
        const prev = parseFloat(this.prevOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) {
            return 
        }
        let vig = current*prev/100;

            switch (this.operation) {
                case '÷':
                    computed = prev / (current/100);
                    break;
                case '×':
                    computed = prev * (current/100);;
                    break;
                case '-':
                    computed = prev - vig;
                    break;
                case '+':
                    computed = prev + vig;
                    break;
                default:
                    break;
            }

        this.currentOperand = computed.toFixed(2).substring(0, 10);
        this.operation = null;
        this.prevOperand = '';
    }

    updateDisplay() {
        this.currentElement.innerHTML = this.currentOperand;
        if (this.operation != null) {
            this.prevElement.innerHTML = `${this.prevOperand} ${this.operation}`;
        } else {
            this.prevElement.innerHTML = '';
        }

        if(this.currentOperand === 'Infinity') {
            this.prevElement.innerHTML = ''
            this.currentElement.innerHTML = 'ошибка'
        }
        if(this.operation == '%') {
            this.prevElement.innerHTML = ''
            this.currentElement.innerHTML = this.prevOperand
        }
    }
}

const calculator = new Calculator(prevElement, currentElement);

btnNumbersElements.forEach (button => {
    button.addEventListener('click', () => {
    calculator.appendNum(button.innerHTML);
    calculator.updateDisplay();
        });
    });

btnOperationsElements.forEach (button => {
    button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerHTML)
    calculator.updateDisplay()
        });
    });

btnEqualElement.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
    calculator.clear();
});

btnVigElement.addEventListener('click', () => {
    calculator.computeVig();
    calculator.updateDisplay();
    calculator.clear();
})

btnClearElement.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

btnDeleteElement.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});
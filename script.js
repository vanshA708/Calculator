let display = document.getElementById('display');
let buttons = document.querySelectorAll('button[type="button"]');

let calculation = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.value;

        if (value === '=') {
            try {
                result = eval(calculation);
                display.value = result;
                calculation = '';
            }
            catch (error) {
                display.value = 'Error';
                calculation = '';
            }
        }
        else if (value === 'C') {
            display.value = '';
            calculation = '';
        }
        else {
            calculation += value;
            display.value = calculation;
        }
    });
});
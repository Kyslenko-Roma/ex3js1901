const firstNumber = +prompt('Enter first name');
const operation = prompt('Enter your operation');
const secondNumber = +prompt('Enter second number');

if (operation !=='+' && operation !=='-' && operation !=='*' && operation !=='/' && operation !=='**' && operation !=='plus' && operation !=='minus' && operation !=='multi' && operation !=='division' && operation !=='raising') {
    alert('Incorrect operation');
        } else if (operation === '+' || 'plus') {
             alert(`Result is ${firstNumber + secondNumber}`);
                }else if (operation === '-' || 'minus') {
                    alert(`Result is ${firstNumber - secondNumber}`);
                     }else if (operation === '*' || 'muti') {
                        alert(`Result is ${firstNumber * secondNumber}`);
                        }else if (operation === '/' || 'division') {
                            alert(`Result is ${firstNumber / secondNumber}`);
                             }else if (operation === '**' || 'raising') {
                                alert(`Result is ${firstNumber ** secondNumber}`);
                                }
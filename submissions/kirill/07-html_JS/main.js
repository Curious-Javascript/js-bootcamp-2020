// Task 1
const signInContainer = document.querySelector('#signInContainer');
// Task 2
const countersContainer = document.querySelector('#countersContainer');
// Task 3
const fibonacciContainer = document.querySelector('#fibonacciContainer');
const number = document.querySelector('#fibonacciInput');

function logIn() {
    let logInReturn;
    let data = {
        name: 'Admin',
        pass: 'Я Главный'
    };
    let nameAnswer = prompt('Who\'s there?');

    if (nameAnswer === data.name) {
        let passAnswer = prompt('Пароль?');

        if (passAnswer === data.pass) {
            logInReturn = 'Здравствуйте';
        } else if (passAnswer === null || passAnswer === '') {
            logInReturn = 'Отменено';
        } else {
            logInReturn = 'Не верный пароль';
        }
    } else if (nameAnswer === null || nameAnswer === '') {
        logInReturn = 'Отменено';
    } else {
        logInReturn = 'I don\'t know you';
    }


    let div = document.createElement('div');
    div.textContent = logInReturn;
    signInContainer.appendChild(div);

    return logInReturn;
}

function addCounter() {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let button = document.createElement('button');

    span.textContent = '0';
    button.textContent = 'Add One';

    div.appendChild(span);
    div.appendChild(button);
    countersContainer.appendChild(div);

    button.addEventListener('click', function (){
        span.textContent = +span.textContent+1;
    });
}

function fibonacchi(n) {
    return n <= 1 ? n : fibonacchi(n - 1) + fibonacchi(n - 2);
}

document.querySelector('#singInBtn').addEventListener('click', logIn);
document.querySelector('#addCounterBtn').addEventListener('click', addCounter);

document.querySelector('#fibonacciBtn').addEventListener('click', function () {
    let numb = fibonacchi(number.value);
    let div = document.createElement('div');

    div.textContent = numb;
    fibonacciContainer.appendChild(div);
});

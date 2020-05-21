
const fibonacci = (number) => {
    let num;
    (number >= 2)
        ? num = fibonacci(number - 1) + fibonacci(number - 2)
        : num = number;

    return num;
};

const getFibonacciNumber = () => {
    document.querySelector('.fibonacci__output').innerHTML = fibonacci(document.querySelector('.fibonacci__input').value);
};

const addCounter = () => {
    let counter = 0;
    const newDiv = document.createElement('div');
    const newButton = document.createElement('button');
    const newSpan = document.createElement('span');
    newButton.textContent = 'button';
    newSpan.textContent = counter;
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newButton);
    newButton.onclick = function () { newSpan.textContent = counter++; };
    document.getElementsByClassName('second-task')[0].appendChild(newDiv);
};

const checkPassword = (countPassword = 3) => {
    const userPassword = prompt('Пароль', '');
    if (countPassword === 1) {
        alert('Пошел вон!!!');
    } else if (userPassword !== 'Admin') {
        countPassword--;
        alert(`Осталось ${countPassword} попыток`);
        checkPassword(countPassword);
    } else {
        alert('Здарова');
    }
};

const checkLogin = (countLogin = 3) => {
    const userName = prompt('Кто там???', '');
    if (countLogin === 1) {
        alert('Пошел вон!!!');
    } else if (userName !== 'Admin') {
        countLogin--;
        alert(`Осталось ${countLogin} попыток`);
        checkLogin(countLogin);
    } else {
        checkPassword();
    }
};

const Button = document.getElementById('Button');
const Loader = document.getElementById('loader');
const numberArea = document.getElementById('Number');


function hideText() {
    if (numberArea.className == 'visible') {
        numberArea.className = 'hidden';
    }
}
function showLoader() {
    if (Loader.className == 'hidden') {
        Loader.className = 'visible';
    }
}
function disableButton() {
    Button.disabled = true;
}

function setRandomNumber() {
    const min = 0;
    const max = 101;
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    numberArea.innerHTML = randomNumber;
    numberArea.className = 'visible';
    numberArea.style.cssText = 'font-size: 90px';

}

function hideLoader() {
    if (Loader.className == 'visible') {
        Loader.className = 'hidden';
    }
}

function enableButton() {
    Button.disabled = false;
}


function onClick() {
    hideText();
    showLoader();
    disableButton();
    setTimeout(() => {hideLoader(); setRandomNumber(); enableButton()}, 2000)
}

Button.addEventListener("click", onClick);


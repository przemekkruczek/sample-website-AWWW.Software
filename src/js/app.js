const name = document.querySelector('#first-name');
const topic = document.querySelector('#topic');
const text = document.querySelector('#text');
const email = document.querySelector('#e-mail');
const number = document.querySelector('#number');

function validate(event) {
    if (this.value.length < 3) {
        this.style.borderBottomColor = "red";
    } else {
        this.style.borderBottomColor = "#7dbd6e"
        }
}
function validateEmail(event) {
    const n = this.value.length;
    if (this.value.indexOf('@') === 0 || this.value.lastIndexOf('@') === n-1) {
        this.style.borderBottomColor = "red";
    } else{
        this.style.borderBottomColor = "#7dbd6e"
    }
}
function validateNumber(event) {
    const stringForNumber = parseInt(this.value);
    if (this.value.length < 9 || Number.isInteger(stringForNumber) === false ) {
        this.style.borderBottomColor = "red";
    } else{
        this.style.borderBottomColor = "#7dbd6e"
    }
}

name.addEventListener('change',validate);
topic.addEventListener('change',validate);
text.addEventListener('change',validate);
email.addEventListener('change',validateEmail);
number.addEventListener('change',validateNumber);


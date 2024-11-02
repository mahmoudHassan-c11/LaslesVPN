const cardElement = document.querySelectorAll('.card');
const boxElement = document.querySelectorAll('.box');
const buttonElement = document.querySelectorAll('.select__button');

cardElement.forEach(function (ele){
    ele.onclick = function () {
        cardElement.forEach(function (ele) {
            ele.classList.remove('border__color__red__hover');
        });
        this.classList.add('border__color__red__hover');
    }
});
boxElement.forEach(function (ele){
    ele.onclick = function () {
        boxElement.forEach(function (ele) {
            ele.classList.remove('border__color__red__hover');
        });
        this.classList.add('border__color__red__hover');
    }
});

buttonElement.forEach((ele) => {
    ele.onclick = function() {
        buttonElement.forEach((ele) => {
            ele.classList.remove("selected");
        });
        this.classList.add('selected');
    };
});
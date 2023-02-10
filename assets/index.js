let pop = document.querySelector('.popup');
let head = document.querySelector('header');
let main = document.querySelector('main');
let foot = document.querySelector('footer');
let popcontent = document.querySelector('.pop-content');
let txt1 = document.querySelector('.content-1').innerText;
let txt2 = document.querySelector('.content-2').innerText;
let btn1 = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2');
let btn3 = document.querySelector('.btn-3');
let burger = document.querySelector('.burger');
let cross = document.querySelector('.cross');
let a = document.querySelector('.a');
let sider = document.querySelector('.aside');
let btn4 = document.querySelector('#c');
let alerts = document.querySelector('.alert');

//show pop-up & close pop-up
function popUp() {
    pop.classList.add('active');
    head.classList.add('active');
    main.classList.add('active');
    foot.classList.add('active');
}
function closePopUp() {
    pop.classList.remove('active');
    head.classList.remove('active');
    main.classList.remove('active');
    foot.classList.remove('active');
}
function drop() {
    a.classList.add('active');
    burger.classList.add('active');
    cross.classList.add('active');
}
function up() {
    a.classList.remove('active');
    burger.classList.remove('active');
    cross.classList.remove('active');
}
function aside() {
    sider.classList.add('active');
}
function closeSide() {
    sider.classList.remove('active');
}
window.addEventListener('load', function(){
    setTimeout(
        function openAlert(event) {
            document.querySelector('.alert').style.display = "inline";
        },3000
    )
});
function closeAlert() {
    alerts.classList.add('active');
}
// set-text popup
btn1.addEventListener('click', function (event) {
    popcontent.innerText = txt1
});
btn2.addEventListener('click', function (event) {
    popcontent.innerText = txt2
});
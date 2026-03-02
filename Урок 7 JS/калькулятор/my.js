// let butt = document.querySelector('.butt')

// function one () {
//     a = 1
//     b = 2
//     console.log(a + b)
//     return 666
// }

// one ()
// butt.onclick = one



// let a = 8
// let b = 9

// function multiply (x, y) {
    
//     return x * y
    
// }


// console.log (multiply(20, 50))




// const add = (x)  => {
//     return x * x
// }

// const result = add (6);
// console.log(result)


// Домашнее задание

 document.getElementById('sum').addEventListener('click', function () {
const a = +(document.getElementById('digit1').value);
const b = +(document.getElementById('digit2').value);
const sum = a + b;
document.getElementById('equals').textContent = sum;
 })

 document.getElementById('sub').addEventListener('click', function () {
const a = +(document.getElementById('digit1').value);
const b = +(document.getElementById('digit2').value);
const sum = a - b;
document.getElementById('equals').textContent = sum;
 })

 document.getElementById('mult').addEventListener('click', function () {
const a = +(document.getElementById('digit1').value);
const b = +(document.getElementById('digit2').value);
const sum = a * b;
document.getElementById('equals').textContent = sum;
 })

 document.getElementById('divide').addEventListener('click', function () {
const a = +(document.getElementById('digit1').value);
const b = +(document.getElementById('digit2').value);
const sum = a / b;
document.getElementById('equals').textContent = sum;
 })




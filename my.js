// document.querySelector('.class1').onclick = function (event) {
//         console.log(event)
//         console.log('block-1')
// }


// document.querySelector('.class2').ondblclick = function (event) {
//         console.log(event)
//         console.log('block-2')
// }
// let width = 100
// document.querySelector('.class3').onmouseenter = function (event) {
//     document.querySelector('.class3').style.background = 'pink'
// }




// document.querySelector('.class2').onmouseleave = function (event) {
//     document.querySelector('.class2').style.background = 'white'
// }


// document.querySelector('.class2').onmousedown = function (event) {
//     document.querySelector('.class2').style.background = 'yellow'
// }

// document.querySelector('.class2').onmouseup = function (event) {
//     document.querySelector('.class2').style.background = 'purple'
// }


// document.querySelector('.test-1').oninput = function (event) {
//     console.log(event)
// }

// document.querySelector('.test-1').onkeyup = function (event) {
//     console.log(event.charCode)
//     console.log(event.code)
// }



//Задание 1
let width = 100
let height = 100
document.querySelector('.block').onclick = function (eventSize) {
    document.querySelector('.block').style.width =  (width + 15) + 'px'
    document.querySelector('.block').style.height = (height + 15) + 'px'
   
     console.log(eventSize)
}


// Задание 2

let div = document.querySelector('.block-2')
div.ondblclick = function (eventText) {
    console.log(eventText)
    console.log(div.textContent)
}


//Задание 3


document.querySelector('.foto').onclick = function (eventImages) {
    document.querySelector('.foto').innerHTML = '<img src = "/Лес.png"></img>'
}












// let myName = 'Vlad'
// let myAge = 5
let div1 = document.querySelector('.naggets')
let div2 = document.querySelector('.chicken')

// console.log (myName + myAge)

// if (myAge == 18 && myName == 'Vlad') {
//     let e = 'loh'
//   div.innerHTML = e
  
//     console.log ('OK')
// } else {
//     console.log ('NOOO')
// }

// console.log (25 * 10)

//Домшнее задание
let i  = 1

while (i <= 50) {
    console.log(i)
    i++
    let e = 'Unstoppable'
    div1.innerHTML = e
}

let j = 50
do {
    console.log(j)
    j--
} while (j >= 25) {
    let r = "MultiKILL"
    div2.innerHTML = r
}

for(let y = 2500; y <= 3000; y++) {
    if (y % 2 == 0) continue;
    console.log (y)
}



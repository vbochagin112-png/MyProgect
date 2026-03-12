// let name = 'Alex'  // Глобальная область видимости

// function greet() {
//     console.log(name)
// }
// greet()




// console.log(name)

// const name = 'Alex' // Ошибка. Нельзя вызвать переменную до ее создания. VAR перестали использовать


// function test() {        // Функциональная область видимости
//     let message = 'hello'
//     console.log(message)
// }

// test()
// console.log(message)



// if (true) {               // Блочная область видимости
//     let age = 25
//     const city = 'Berlin' 
// }

// console.log(age)
// console.log(city)



// const set2 = new Set(['a', 'b', 'c', 'd', 'd', 'e']) //'d' - передается один раз, в этом отличие от обычного массива

// console.log(set2)




// console.log(name3)

// let name1 = 'Alex1'
// const name2 = 'Alex2'
// var name3 = 'Alex3'




// sayHello()             // Поднимается в области видимости(обычная фукция)

// function sayHello() {
//     console.log('Hello')
// }

// sayHello()             // Стрелочную функцию нельзя вызвать до ее создания

// const sayHello = () => {
//     console.log('Hello')
// }




// function outer () {         // Замыкание
//     let count = 0

//     function inner() {
//         count++
//         console.log(count)
//     }
//     return inner
// }
//  const counter = outer()


//  counter()
//   counter()
//    counter()
//    counter()
//    counter()
   



//    function sayHello(name) {              //Замыкание
//     return function() {
//         console.log('hello ' + name)
//     }
//    }

//    const greet = sayHello('Alex')

//    greet()





//  const user = {                //Прототип обьекта (admin стал прототипом user)
//     sayHi() {
//         console.log('Привет')
//     }
//  }

//  const admin = {}

//  admin.__proto__= user

// admin.sayHi()
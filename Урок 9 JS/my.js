const arrPhone = ['samsung', 'apple', 'honor', 'lenovo', 'oppo', 'tecno', 'huawei', 'vivo', 'sony', 'Realme']
const bat = document.getElementById('btn')

bat.addEventListener ('click', () => {
    const div = document.querySelector('.output')


div.textContent = arrPhone.slice(2, 7)
console.log(div)
})


const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myBat = document.getElementById('myBtn')

myBat.addEventListener('click', () => {
    const div = document.querySelector('.output')

    div.textContent = arrNumber.filter(num => num % 2 === 0)
})



myBat.addEventListener('click', () => {
    const div = document.querySelector('.oddDigit')

    div.textContent = arrNumber.filter(num => num % 2 !== 0)
})


const arr = [
    [1,2,3],
    [4,5,6]
]

arr.reverse().forEach(innArr => {
    

    console.log(innArr.reverse([1] [3]))
})

const revBtn = document.getElementById('reversBtn')

revBtn.addEventListener('click', () => {
const div = document.querySelector('.revers')
    
    div.textContent = arr.reverse()
})





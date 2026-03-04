// Задание домашнее 
// Все задания в одной функции
 
 const bat1 = document.querySelector('.btn1')
 
bat1.addEventListener('click', function  () {
    const body = document.querySelector('.element')
   
   body.style.width = '150px'
   body.style.height = '150px'
   body.textContent = 'Домашнее задание'

   body.classList.add ('font_size')
   body.classList.add ('backg')
   body.classList.add ('font')

   const bat2 = document.querySelector('.btn2')
   bat2.addEventListener('click', function  () {
    body.classList.remove('font_size')
    body.textContent = 'Готово'
   })
} )
















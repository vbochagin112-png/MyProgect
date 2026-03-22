let inputDeal = document.getElementById('inpDeal')
const newDiv = document.querySelector('.items')
let btn = document.getElementById('but')



btn.addEventListener('click', () => {
    
    if(inputDeal.value === ""){

        console.log('none')
    } else {
    const newDiv2 = document.createElement('div')
    newDiv2.classList.add('item')
    newDiv.appendChild(newDiv2)
    

    const newDivText = document.createElement('div')
    newDivText.classList.add('text')
    newDiv2.appendChild(newDivText) 
    newDivText.textContent = inputDeal.value    

    newDiv2.addEventListener('mouseenter', () => {
        const butDel = document.createElement('button');
        butDel.classList.add('del');
        newDiv2.appendChild(butDel)
        butDel.textContent = 'Delete'
        
        const butEdit = document.createElement('button')
        butEdit.classList.add('edit')
        newDiv2.appendChild(butEdit)
        butEdit.textContent = 'Edit'
        

        newDiv2.addEventListener('mouseleave', () => {
            butDel.remove()
            butEdit.remove()  
            })

            butDel.addEventListener('click', () => {
                newDiv2.remove()
        })

            butEdit.addEventListener('click', () => {
               newDivText.textContent = prompt('Введите изменения!') 
            })
    }, )
    }
    inputDeal.value = "";
  
    
})



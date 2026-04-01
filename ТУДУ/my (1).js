const inpDeal = document.getElementById('writeDeal');
const btnDeal = document.getElementById('creatDeal')
const dealList = document.querySelector('.newDeal')


let deals = [];

btnDeal.addEventListener('click', () => {
    const text = inpDeal.value.trim();
    if(text === '') return;

    const deal = {
        id: Date.now(),
        text: text
    }

    deals.push(deal);
    inpDeal.value = '';
    render()

    console.log('efdddd')
})

 function render() {
    dealList.innerHTML = '';

    deals.forEach(deal => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('element');
        dealList.appendChild(newDiv);

        const textSpan = document.createElement('span');
        textSpan.classList.add('text-span');
        textSpan.textContent = deal.text;
        newDiv.appendChild(textSpan);

        const btnSpan = document.createElement('span');
        btnSpan.classList.add('btn-group');
        newDiv.appendChild(btnSpan);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'edit';
        editBtn.classList.add('edit-btn');
        btnSpan.appendChild(editBtn);

        editBtn.addEventListener('click', () => {
            const editText = prompt('Изменить содержимое!', deal.text)
            if (editText) {
                deal.text = editText
                render()
            }
        })
        
        const btnDelite = document.createElement('button');
        btnDelite.textContent = 'delete';
        btnDelite.classList.add('btn-del');
        btnSpan.appendChild(btnDelite);

        btnDelite.addEventListener('click', () => {
            deals = deals.filter(t => t.id !== deal.id)
            render()
        })
        
})
    
    
 }
 


// const input = document.getElementById('caseInput');
// const addBtn = document.getElementById('addCase');
// const list = document.getElementById('taskList');

// let deals = [];

// addBtn.addEventListener('click', () => {
//     const text = input.value.trim();
//     if (text === "") return;

//     const deal = {
//         id: Date.now(),
//         text: text
//     }

//     deals.push(deal);
//     input.value = '';
//     render()
// })

// function render() {
//     list.innerHTML = '';

//     deals.forEach(deal => {
//         const li = document.createElement('li');
//         li.classList.add('list1')

//         const span = document.createElement('div');
//         span.textContent = deal.text;

//         const editBtn = document.createElement('button');
//         editBtn.textContent = 'Edit';
//         editBtn.classList.add('edit-btn')

//         editBtn.addEventListener('click', () => {
//             const newText = prompt('Изменить задачу', deal.text);
//             if (newText) {
//                 deal.text = newText;
//                 render();

//             }
//             console.log('loool')
//         })

//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Delete';
//         deleteBtn.classList.add('delete-btn');

//         deleteBtn.addEventListener('click', () => {
//         deals = deals.filter(t => t.id !== deal.id)    
//         render(); 
//         })

//         li.appendChild(span);
//         li.appendChild(editBtn);
//         li.appendChild(deleteBtn);

//         list.appendChild(li)
//     })
// }
const form = document.querySelector('form')
const userInput = document.querySelector('.userInput')
const List = document.querySelector('.list')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const Enter = userInput.value
    // console.log(Enter);
    if(Enter === ''){
        alert('Please Enter Task')
    }else{
        let li = document.createElement('li');
        li.innerHTML = Enter
        // console.log(li)
        List.appendChild(li)
    }
})
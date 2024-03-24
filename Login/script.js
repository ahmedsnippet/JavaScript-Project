const form = document.querySelector('form')
const username = document.querySelector('#username')
const pass = document.querySelector('#pass')
const U = document.querySelector('.U')
const P = document.querySelector('.P')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let GetUserName = username.value
    let GetPassword = pass.value
    
    U.innerHTML = GetUserName
    P.innerHTML = GetPassword

})
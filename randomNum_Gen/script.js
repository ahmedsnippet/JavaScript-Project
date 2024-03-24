
let numGenerator = document.querySelector('.randomnum')
let result = document.querySelector('.result')
result.innerHTML = '0'

numGenerator.addEventListener('click', () => {
    result.innerHTML = (Math.random() * 10 + 1)
})
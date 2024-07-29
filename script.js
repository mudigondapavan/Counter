const span = document.querySelector('span')
const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const btns = document.querySelectorAll('.btn')

let count = 0

increase.addEventListener('click',()=>{
    count++
    span.innerHTML=count
    span.style.color = count === 0 ? "inherit" : span.style.color;
    span.style.color = count > 0 ? "green" : span.style.color;
})

decrease.addEventListener('click',()=>{
    count--
    span.innerHTML=count
    span.style.color = count === 0 ? "inherit" : span.style.color;
    span.style.color = count < 0 ? "red" : span.style.color;
})

reset.addEventListener('click',()=>{
    count = 0
    span.innerHTML=count
    span.style.color="inherit"
})





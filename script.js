let hamburger = document.querySelector('.hamburger')
let down = document.querySelector('.down')
let text = document.querySelector('.text')

hamburger.addEventListener('click',function(){
    down.classList.toggle('active')
    if(down.classList.contains('active')){
       text.style.display='none'
       hamburger.style.opacity='0.5'
    }
    else{
        text.style.display='block'
        hamburger.style.opacity="1"
    }
})
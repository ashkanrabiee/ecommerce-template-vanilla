let slideindex = 1 ;

function setSlide(input , index){
    slideindex = index ;
    let item = document.querySelector(`#${input}`)
    let slides = document.querySelector('.slides').children
    item.classList.add('active')

}









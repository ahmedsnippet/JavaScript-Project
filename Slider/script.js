let flag = 0

const slideShow = (num) =>{
    let slides = document.querySelectorAll('.slides')
    // console.log(slides)

    if (num == slides.length) {
        flag = 0
        num = 0
    }else if(num < 0){
        flag = 1
        num = 1
    }

    for (const y of slides) {
        y.style.display = 'none'
    }


    slides[num].style.display = 'block'

}
slideShow(flag)

function controller(x) {
    flag = flag + x;
    slideShow(flag);
  }


// if(flag > 0){
//     // document.slides.style.diplay = 'block'
//     console.log('llll')
// }
// slides.addEventListener('click', (e) => {
//     if(e == slides.length){
//         flag = 0
//         e = 0
//     }else if(e < 0){

//     }
// })






// prev.addEventListener('click', ()=>{
//     flag--
// })
// next.addEventListener('click', ()=>{
//     flag++
// })

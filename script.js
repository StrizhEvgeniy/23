let viewport = document.getElementById("viewport").offsetWidth;
let btnStop = document.getElementById("stop");
let btnSovet = document.getElementById("sovet")
let sliderImg = document.querySelector("div.slider-img");
let sliderText = document.querySelector("div.slider-text");
let sliderImgAll = document.querySelectorAll("div.slide")
let sliderTextAll = document.querySelectorAll("div.slide-text")   
let sovetAll = document.querySelectorAll("div.sovet_text")
let viewSlideImg = 0;
let viewSlideText = sliderTextAll.length-1;
let isReverseImg = false;
let isReverseText = false
let speed = 200;


let timerImg = setInterval(()=>{
    if (speed >=5000) clearInterval(timerImg);
    else {
        if (viewSlideImg >= 0 && !isReverseImg) {
            viewSlideImg++
        } 
        if (viewSlideImg == sliderImgAll.length){
            isReverseImg = true
        }
        if (isReverseImg){
            viewSlideImg--
        }
        if (viewSlideImg<=0){
            isReverseImg=false
        }

        sliderImg.style.left = -viewSlideImg * viewport + "px"
        
    }
},speed)

let timerText = setInterval(()=>{
    if (speed >=5000) clearInterval(timerText);
    else {
        if (viewSlideText <= sliderTextAll.length-1 && !isReverseText) {
            viewSlideText--
        } 
        if (isReverseText){
            viewSlideText++
        }
        if (viewSlideText == 0){
            isReverseText = true
        }
        if (viewSlideText==sliderTextAll.length-1){
            isReverseText=false
        }
        sliderText.style.left = -viewSlideText * viewport + "px"
        console.log(viewSlideText)
    }
},speed+500)

btnStop.addEventListener("click", () => {
    let stop = setInterval(()=>{
        if(speed >= 5000) clearInterval(stop)
        else {
            speed+=10
        }
    })
} )

btnSovet.addEventListener("click", () =>{
    sovetAll[Math.floor(Math.random()*sovetAll.length)].classList.add("display")
    btnSovet.remove()
    
})




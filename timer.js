const el = document.querySelector(".clock")
const bell = document.querySelector("audio")

const  mindiv = document.querySelecto(".mins")
const secdiv = document.querySelector(".secs")

const starbtn = document.querySelector(".start")
localStorage.setItem("btn", "focus");


let initial ,totalsecs, perc , paused ,  mins , seconds;

starbtn.addEventListener("click", () => {  
    let btn = localStorage.getItem("btn")

   if (btn === focus){
       mins= +localStorage.getItem("focus-time")
   }
   else{
       mins= +localStorage.getItem("break-time")
   }

   seconds = mins * 60 ;
   totalsecs = mins * 60 ; 
   setTimeout (decremenT(), 60);
   starbtn.style.transform = "scale(0)";
   paused= false
})

function decremenT(){
    mindiv.textcontent = Math.floor(seconds/ 60)
    secdiv.textcontent = seconds % 60 > 9 ? seconds % 60 : '0${seconds % 60}'

    if (seconds > 0){
        seconds--;
        initial = window.setTimeout("decremeanT()", 1000);
    }
    else{
        mins = 0
        seconds = 0 
        bell.play();
        let btn = localStorage.getItem ("btn")
    
        if (btn === "focus"){
            starbtn.textcontent = "star break"
            starbtn.classList.add ("break")
            localStorage.setItem("btn" , "focus")
        }
        starbtn.style.transform = "scale(1)"
    }

}
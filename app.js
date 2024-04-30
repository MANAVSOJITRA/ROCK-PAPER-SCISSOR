let choices = document.querySelector(".choices").children
let choices1 = document.querySelectorAll(".choice")
let userimg = document.querySelector(".user-img")
let computerimg = document.querySelector(".computer-img")
let userchoice ;
let compchoice ;
let randomnum = 0
let wins = [["rock","scissor"],["paper","rock"],["scissor","paper"]]
let images = ["https://cdn-icons-png.flaticon.com/512/1477/1477228.png ","https://cdn-icons-png.flaticon.com/512/3805/3805447.png","https://cdn-icons-png.flaticon.com/512/10077/10077061.png"]
 
Array.from(choices).forEach( (e,index1) => {
        e.addEventListener("click",async a =>( 
            e.classList.add("active"),   
            choices1.forEach( (e2,index2) => {
                if (index1 !== index2){
                    e2.classList.remove("active")
                }
            }),
        document.querySelector(".main").classList.add("start"),  
        e.classList.add("active"),          
        randomnum = (Math.floor(Math.random()*3)),
        compchoice = wins[randomnum][0] ,
        userchoice = (e.classList[0]) ,
        document.querySelector(".result-text").innerHTML = "wait.."  ,
        setTimeout(() => {
            document.querySelector(".main").classList.remove("start")
            document.querySelector(".lasttext1").style.display="block"
            document.querySelector(".lasttext2").style.display="block"
            userimg.firstElementChild.src= e.firstElementChild.src
            computerimg.firstElementChild.src =  images[randomnum]
            userimg.lastElementChild.textContent=userchoice
            computerimg.lastElementChild.textContent=compchoice
            win()
        }, 2500)
))
   function win(){
        for (const win in wins) {
            if (userchoice === wins[win][0] && compchoice === wins[win][1]){
                     document.querySelector(".result-text").innerHTML = "user win!!"  
            }
            if (compchoice === wins[win][0] && userchoice === wins[win][1]){
                    document.querySelector(".result-text").innerHTML = "computer win!!"  
            }
            if (userchoice === compchoice){
                    document.querySelector(".result-text").innerHTML = "match draw!"  
            }
        }    
        }
    })

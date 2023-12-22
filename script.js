const about = document.querySelector(".aboutBtn")
const pop = document.querySelector(".popDiv")
const banner =  document.querySelector(".banner")
about.addEventListener("click",function(){
    pop.style.display = "block"
    banner.style.display = "none"
    setTimeout(function(){
        pop.style.display = "none"
        banner.style.display = "flex"


    },10000)
})
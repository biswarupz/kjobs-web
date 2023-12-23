const about = document.querySelector(".aboutBtn")
const pop = document.querySelector(".popDiv")
const banner =  document.querySelector(".banner")
const navbar = document.getElementById("navbar")
const contact = document.querySelector(".contactBtn")

about.addEventListener("click",function(){
    pop.style.display = "block"
    banner.style.display = "none"
    setTimeout(function(){
        pop.style.display = "none"
        banner.style.display = "flex"


    },10000)
})


var rect = document.querySelector("#rect");


window.addEventListener("mousemove", function (details) {
  console.log(details.clientX);
  console.log(details.clientY);
  gsap.to("#rect", {
    left: details.clientX + "px",
    top: details.clientY + "px",
    ease: Power4,
  });
});

about.addEventListener("mousemove",function(){
    rect.style.display="none"
})
contact.addEventListener("mousemove",function(){
    rect.style.display="none"
})

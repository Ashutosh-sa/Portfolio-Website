var typed = new Typed(".multiple-text", {
    strings: ["B.tech(computer science student)"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true 
})
let header= document.querySelector("header")
window.addEventListener("scroll",function(){
   header.classList.toggle("sticky",window.scrollY>120);  
}

  )

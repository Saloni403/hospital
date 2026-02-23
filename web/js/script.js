
// navbar service toggle 
let Servicesdropdown = document.querySelector(".Servicesdropdown")
let sublist = document.querySelector(".sublist")

Servicesdropdown.addEventListener("click", ()=>{
    sublist.classList.toggle("active")

})



// menu js
  function showSubMenu(){
document.querySelector(".menusublist").classList.toggle("active")
        }
        function showMenu(){
           document.querySelector(".menu").classList.add("active") 
        }
         function removeMenu(){
           document.querySelector(".menu").classList.remove("active") 
        }
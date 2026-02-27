
// navbar service toggle 
// let Servicesdropdown = document.querySelector(".Servicesdropdown")
// let sublist = document.querySelector(".sublist")

// Servicesdropdown.addEventListener("click", ()=>{
//     sublist.classList.toggle("active")

// })



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




        // appointment form
        let form = document.querySelector(".appointment-section")
        function getAppointment(e){
          e.stopPropagation();
          e.preventDefault();
          form.classList.add("active")
          document.body.style.overflow="hidden"
        }

        document.querySelector(".bi-x-lg").addEventListener("click",()=>{
form.classList.remove("active")
document.body.style.overflow="scroll"
        })
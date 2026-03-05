
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

        // chatbot
    let chatbot = document.querySelector(".chatbot")
let chatbotimg = chatbot.querySelector(".mainimg")
let chattingbox = document.querySelector(".box1")
let closingchatbot = document.querySelector(".closingchatbot")

chatbotimg.addEventListener("click", ()=>{

    if(chattingbox.style.display === "block"){
        // close chatbot
        chattingbox.style.display="none"
        chatbotimg.src="web/images/assistant.png"
        chatbot.style.animation="jumping 2s linear infinite"
         document.body.style.overflow="auto"
    }else{
        // open chatbot
        chatbotimg.src="web/images/close.png"
        chatbot.style.animation="none"
        chattingbox.style.display="block"
        document.body.style.overflow="hidden"
    }

})

closingchatbot.addEventListener("click", ()=>{
    chattingbox.style.display="none"
    chatbotimg.src="web/images/assistant.png"
    chatbot.style.animation="jumping 2s linear infinite"
})
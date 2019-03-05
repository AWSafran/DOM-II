// Your code goes here

//example of .stopPropagation()
const welcomeMessage = document.querySelector("h2");
welcomeMessage.addEventListener('click', function(event){
    welcomeMessage.textContent = "Hello!";
    event.stopPropagation();
});

const pageHeader = document.querySelector(".intro");
pageHeader.addEventListener('click', function(){
    pageHeader.style.color = "red";
});
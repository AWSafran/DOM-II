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

const firstButton = document.querySelector(".destination .btn");
firstButton.addEventListener('dblclick',function(event){
    firstButton.style.background = "yellow";
    firstButton.style.color = "blue";
    firstButton.textContent = "Don't forget Sunscreen!";
})

const container = document.querySelector(".home");
container.addEventListener('wheel', function(event){
    console.log("triggered scroll event listener");
    container.style.color = "gray";
})

const secondaryHeaders = document.querySelectorAll('h2');
secondaryHeaders[1].addEventListener('mouseenter', function(event){
    secondaryHeaders[1].textContent = "Yikes! A mouse!";
})

secondaryHeaders[1].addEventListener('mouseleave', function(event){
    secondaryHeaders[1].textContent = "Let's Go!";
})

secondaryHeaders[2].addEventListener('mousedown', function(event){
    secondaryHeaders[2].style.color = 'red';
})

secondaryHeaders[2].addEventListener('mouseup', function(event){
    console.log("mousedown keydown event listener");    secondaryHeaders[2].style.color = 'black';
})

const hFours = document.querySelectorAll('h4');

const allButtons = document.querySelectorAll('.btn');
allButtons[1].addEventListener('click', function(event){
    hFours[1].innerText = "UNAVAILABLE"
})

const footer = document.querySelector('footer p');
window.addEventListener('resize', function(event){
    footer.style.color = "red";
});

//preventDefault
const navItems = document.querySelectorAll(".nav-link");
navItems.forEach(function(element){
    element.addEventListener('click', function(event){
        event.preventDefault();
        console.log(event.defaultPrevented);
    })
})

//Animation Streth Goals
let clickCounter = 0;
allButtons[2].addEventListener('click', function(event){
    console.log(hFours[2]);
    if(clickCounter % 2 === 0){
        TweenMax.to(hFours[2], 1, {opacity:0.2, rotation:180});
        
    }
    else{
        TweenMax.to(hFours[2], 1, {opacity:1, rotation:0});
    }
    ++clickCounter;
});
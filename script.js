$(document).ready(function(){

$(window).scroll(function(){
 
    if(this.scrollY > 20.0)
    {
        
$('.navbar').addClass("sticky");

    }else
    {
        $('.navbar').removeClass("sticky");
    }
})
});

// =================swiper==================


var swiper = new Swiper(".mySwiper", {
  
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor:true, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });
 

  // =================circle skill==================
  
  const circles=document.querySelectorAll('.circle_skill');
  circles.forEach(elem=>{
    var dots=elem.getAttribute("data-dots");
    var marked=elem.getAttribute("data-percent");
var percent= Math.floor(dots*marked/100);
var points="";
var rotate=360/dots;

for(let i=0; i<dots; i++){
  points +='<div class="points" style="--i:$(i); --rot:$(rotate)deg"></div>';

}

elem.innerHTML=points;
  })

 // =================circle skill -2==================
 let number=document.getElementById('number');
debugger;
let counter = 0;
setInterval(()=>{
  if(counter ==65){
    clearInterval;

  }
  else
  {
    counter +=1;
    number.innerHTML=`${counter}%`;
  }
},30);


let number1=document.getElementById('number1');
debugger;
let counter1 = 0;
setInterval(()=>{
  if(counter1 ==75){
    clearInterval;

  }
  else
  {
    counter1 +=1;
    number1.innerHTML=`${counter1}%`;
  }
},30);

let number2=document.getElementById('number2');
debugger;
let counter2 = 0;
setInterval(()=>{
  if(counter2 ==85){
    clearInterval;

  }
  else
  {
    counter2 +=1;
    number2.innerHTML=`${counter2}%`;
  }
},30);

let number3=document.getElementById('number3');
debugger;
let counter3 = 0;
setInterval(()=>{
  if(counter3 ==65){
    clearInterval;

  }
  else
  {
    counter3 +=1;
    number3.innerHTML=`${counter3}%`;
  }
},30);



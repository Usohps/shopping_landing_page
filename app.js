var userName= prompt("Please kindly input your name");
var message= document.getElementById("greeting");
var user=document.getElementById("name");
user.innerText=userName;
var date= new Date().getHours();
if(date < 12){
    message.innerText="Good morning";
    message.style.color="red";
}else if(date > 12 && date < 18){
        message.innerText="Good Afternoon";
        message.style.color="green";
    }else if(date > 18){
        message.innerText="Good Evening";
        message.style.color="blue";
    }else{
        message.innerText="Welcome";
        message.style.color="orange";
    };

// USER_CART INCREMENT AND DECREMENT

var data="";
var count=document.getElementById("root");
count.innerText = data;

function decrement(){
    if(data>0){
   data=data-1;
   count.innerText=data;
    }else{
        data = 0;
    };
};
function increment(){
    data++;
    count.innerText=data;
 };

  //  adding incremented and decremented number to cart
  var cartcountNumber="";
  var cartCount=document.getElementById("cart_count");
  cartCount.style.display="none";
 //  cartCount.innerText=cartcountNumber;
 var Addbtn=document.getElementById("add");
 Addbtn.addEventListener("click",()=>{
     cartcountNumber=document.getElementById("root").innerText;
     cartCount.style.display="block"
     cartCount.style.textAlign="center"
     cartCount.innerText=cartcountNumber;
 });

var slide_index = 1;  
displaySlides(slide_index);  
function nextSlide(n) {  
    displaySlides(slide_index += n);  
}  
function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  
function displaySlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("showSlide");  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index - 1].style.display = "block";  
}
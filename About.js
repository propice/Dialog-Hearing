

var slideIndex=1; 
showSlide(showSlide);

function plusSlide(n){
  showSlide(slideIndex+=n)
}
function currentSlide(n){
  showSlide(slideIndex = n);
}


function showSlide(n){

  var i;

  var mySlide=document.getElementsByClassName("team-img-socila-block");
  var dots=document.getElementsByClassName("dot");

  if(n>mySlide.length){
    slideIndex=1;
  }

  if(n<1){
    slideIndex=mySlide.length;
  }

  for(i=0;i<mySlide.length;i++){
    mySlide[i].style.display="none";
  }

  for(i=0;i<dots.length;i++){
    dots[i].className= dots[i].className.replace("active"," "); 
  }

  mySlide[slideIndex-1].style.display=" block";

  dots[slideIndex-1].className +="  active";

}
function changeBg(){
    var navbar = document.getElementById("navbar")
    var scrollColor = window.scrollY;
   if(scrollColor <200 ){
    navbar.classList.remove('bgColor');
   }else{
    navbar.classList.add('bgColor')
   }
}
hi
window.addEventListener('scroll',changeBg);


function changeBg(){
    var navbar = document.getElementById("navbar")
    var scrollColor = window.scrollY;
   if(scrollColor <500 ){
    navbar.classList.remove('bgColor');
   }else{
    navbar.classList.add('bgColor')
   }
}

window.addEventListener('scroll',changeBg);
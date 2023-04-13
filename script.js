// Script for navigation bar
const bar = document.getElementById("bar");
const clos = document.getElementById("close");
const nav= document.getElementById("navbar");

if(bar){
    bar.addEventListener('click',function(){
        nav.classList.add("active");
    })
}

if(clos){
    clos.addEventListener('click',function(){
        nav.classList.remove("active");
    })
}

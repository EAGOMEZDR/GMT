
document.querySelector(".botonMenu").addEventListener("click", function(){
    
    document.querySelector("#barraMenu").classList.remove("hidden");
    document.querySelector(".botonMenu2").classList.remove("hidden");
    document.querySelector(".botonMenu").classList.add("hidden");  

})


document.querySelector(".botonMenu2").addEventListener("click", function(){
    
    document.querySelector("#barraMenu").classList.add("hidden");
    document.querySelector(".botonMenu2").classList.add("hidden");
    document.querySelector(".botonMenu").classList.remove("hidden");  

})

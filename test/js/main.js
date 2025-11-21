document.getElementById("btn").addEventListener("click", function(){
    alert("تبریک! اولین فانکشن جاوااسکریپت کار کرد");
});

const burger =
document.getElementById("burger");
const menu =
document.getElementById("menu");

burger.addEventListener("click", () =>{
    menu.classList.toggle("show");
});
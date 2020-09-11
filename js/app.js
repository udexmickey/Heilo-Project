// alert("really");
const headH1 = document.querySelector(".headH1");
const headColor = document.querySelector(".headColor");
const fixedMenu = document.querySelector(".fixedMenu");
const slipt = document.querySelector(".slipt");
const checkBox = document.querySelector("input[type=checkbox]");

headH1.addEventListener("click", function(){
    // headColor.style.color = "#fff";
    console.log("its working");
});

function getMenu(){
       
            fixedMenu.style.display = "block";

}
checkBox.addEventListener("click", function(){
    getMenu();
    
});
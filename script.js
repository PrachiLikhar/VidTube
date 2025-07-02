let menuicon=document.querySelector(".menu-icon");
let sidebar=document.querySelector(".sidebar");
let container=document.querySelector(".container");
 menuicon.onclick=function(){
sidebar.classList.toggle("small-sidebar");
container.classList.toggle("large-container")
}

"use script";

const boxing = document.getElementById('boxing');
const input = document.getElementById('search');
const list = document.getElementById('list');

const arr = ["chicken", "hamburger", "free", "chikensandvic", "klabsandvic"];


const func = function(){
    boxing.style.display = "grid";
    boxing.style.transition = "5s";
    list.style.marginTop = "430px";
}

input.addEventListener('click', func);
"use script";

const btn = document.getElementById('main__btn');
const mainMore = document.getElementById('main__more');
const closeBtn = document.getElementById('close__btn');
const mainRight = document.getElementById('main__right');


const func = function(){
    mainMore.style.display = "inline-block";
}

btn.addEventListener('click', func);

closeBtn.addEventListener('click', function (){
    mainMore.style.display = "none";
    mainRight.style.backgroundColor = "blue";
});
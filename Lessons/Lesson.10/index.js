
"use script"

const nmb = document.getElementById("number");
const nmb2 = document.getElementById("numbers");
const inp = document.getElementById("input");
const btn = document.getElementById("check");
const plus = document.querySelector("#plus");


const ranRom = Math.floor(Math.random() * 100 + 1);
const ranRom2 = Math.floor(Math.random() * 100 + 1);
const ranRom3 = Math.floor(Math.random() * 4 + 1);

nmb.textContent = ranRom;
nmb2.textContent = ranRom2;

let symbol = "+";

let sum = ranRom + ranRom2;
if(ranRom3 == 1){
    symbol = "+";
}else if (ranRom3 == 2) {
    symbol = "-";
}else if (ranRom3 == 3) {
    symbol = "*";
}else if(ranRom3 == 4) {
    symbol = "/";
};

plus.textContent = ranRom3;

btn.addEventListener('click', function() {
    if(sum == inp.value){
        alert("true");
    }else{
        alert("false");
    }
});


"use script"

// Call and aply 

const user = {
    fName: "Umar",
    lName: "Hamidov",
    login: "Umar",
    pass: "password",
    email: "email@gmail.com",
    newYear: 2023,


countbirthYear: function (age) {
    const brithYear = this.newYear - age;
    return brithYear;
},

countbirthYear: function (age, sum) {
    const brithYear = this.newYear - age;
    return { brithYear, sum };
},

};

console.log(user.countbirthYear(17, 20));


const admin = {
    fName: "Umid",
    lName: "Hamidov",
    login: "Umid",
    pass: "password",
    email: "email@gmail.com",
    newYear: 2023,
};

let a = [40, 100];
let b = 50;

// call
console.log(user.countbirthYear.call(admin, b));
console.log(user.countbirthYear.call(admin, ...a));

// aply
// console.log(user.countbirthYear.call(admin, [b]));


(function () {
    alert("JS, Salom Dunyo");
})();


"use script"

// find (objectlardan tashkil topkan array orqali topish)

const user = {
    fName: "User",
    login: "user",
    pass: "passUser",
};


const admin = {
    fName: "Admin",
    login: "admin",
    pass: "passAdmin",
};


const costumer = {
    fName: "Costumer",
    login: "costumer",
    pass: "passCostumer",
};

const arr = [admin, user, costumer];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i].fName);

    if (arr[i].fName == "User") {
        console.log(arr[i]);
    }
}

// let newFind = arr.find((el) => {
//     console.log(el);
//     return el.fName == "User";
// });

// console.log(newFind);
// console.log(arr);

// -----------------------------------------------------------

// findIndex (indexni topish)

let newFind = arr.findIndex((el) => {
    console.log(el);
    return el.fName == "User";
});
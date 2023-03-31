// JS

"use strict"

// // Number ( Sonlarni o'zida saqlovchi malumot turi )
// let age = 23;
// console.log(age);

// // String ( O'zida belgilar ketma-ketligini saqlovchi malumot turi )
// let fName = 'Ulugbek'
// console.log(fName);

// // Boolean ( Mantiqiy malumot turi bo'lib true-rost false-yolg'on qiymatlariga ega )
// let isUser = false;
// console.log(isUser);

// // Undefined ( Hali aniqlanmagan malumot turi )
// let student;
// console.log(student);

// // Null ( Bo'sh qiymatga ega bo'lgan malumot turi )
// let school = null;
// console.log(school);

// // Symbol ( Yagona (unique) va o'zgarmas qiymatga ega bo'luvchi malumot turi )
// let id = Symbol('id');
// console.log(id);

// // BigInt ( Katta sonlarni yozishga moljanlangan malumot turi )
// const alHuge = BigInt(2138748358742389278937489);
// console.log(alHuge);

// // O'zgaruvchilar 
// let yosh = "17"
// console.log(yosh);
// yosh = "18";
// console.log(yosh);

// const ism = "sunat"
// // ism = "sunat"
// console.log(ism);

// ==========================================================

// Asosiy Operatorlar

// Arifmetik operatorlar ==========================================================================================================

// let a = 5, b = 10;
// console.log(a+b); // 15
// console.log(a-b); // -5
// console.log(a*b); // 50
// console.log(a/b); // 0.5
// console.log(a%b); // 5
// console.log(a++); // 5
// console.log(a);   // 6
// console.log(++a); // 7 
// console.log(a);  // 7
// console.log(b--); // 10 
// console.log(b);  // 9
// console.log(--b); // 8
// console.log(b); // 8

// Solishtrish operatorlari ( comparison ) =======================================================================================

// let a = 5, b = 10, c = "5";
// const z = a; 
// console.log(a == c);  // true
// console.log(a === c); // false
// console.log(a == z);  // true
// console.log(a === z); // true
// console.log(a != b);  // true
// console.log(a != z);  // false
// console.log(a > b);  // false
// console.log(a < b); // true
// console.log(a >= b); // false
// console.log(a <= b); // true

// // Tayinlash operatorlari ( assignment ) ===================================================================================

// let a = 5, b = 10, c = 15;

// console.log(a); // 5
// a = b;
// console.log(a); // 10
// a += b;
// console.log(a); // 20
// a -= b;
// console.log(b); // 10
// c *= b;
// console.log(c); // 150
// c /= 5;
// console.log(c); // 30
// b %= 2;
// console.log(b); // 0 

// String =======================================================================================================================

// let ism = "Xojiakbar"
// console.log(ism);

// let familya = "Isro\"ilov"
// console.log(familya);

// Birlashtrish ( Concatenation )

// let ism = "Xojiakbar"
// let massage = 'Salom ' + ism + ' !'
// console.log(massage);

// Template literals =============================================================================================================

// let ism = "Xojiakbr"
// let massage = `Salom ${ism}`
// console.log(massage);

// Mantiqiy operatorlar =====================================================================================================

// const htmlPassed = true;
// const cssPassed = true;
// let message = '';

// if ( htmlPassed && cssPassed ) {
//     message = 'Siz Bootsrap kursini boshlashingiz mumkin!';
// } else if (htmlPassed || cssPassed ) {
//     message = 'Iltimos ikkinchi kursni ham tugating!';
// } else {
//     message = 'Iltimos brinchi ikkala kursni ham tugatib chiqing!';
// }
// console.log(message);

// Type conversion ==============================================================================================

// const yosh = '23'; // String
// console.log(yosh); // String
// console.log(Number(yosh)); // Number

// console.log(yosh + 1); // ( concatenation )
// console.log(Number(yosh) + 1); // 24

// const ism = 'Xojiakbar';
// console.log(Number(ism)); // NaN

// const yil = 2021; // Number
// console.log(yil); // Number
// console.log(String(yil)); // String

// console.log('Men ' + 2006 + 'chi yilda tavallud  topganman');
// console.log('30' - '10' - 3);

// Truthy va Falsy ===================================================================================================

// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(0n));

// // Truthy qiymatlari 
// console.log(Boolean('Ulugbek'));
// console.log(Boolean(23));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean('0'));
// console.log(Boolean('false'));

// const ism = '';
// if (ism) {
//     console.log('Sizning ismingiz: ' + ism);
// } else{
//     console.log('Iltimos ism Kriting');
// }

// Contitional statement

// if statment

const number = 10;
if (number > 15) {
    console.log('Foydalanuvchi kursdan foydalanishingiz mumkin');
}

console.log("Foydalanish uchun ro'yxatdan o'ting");
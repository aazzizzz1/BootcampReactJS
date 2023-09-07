// Deklarasi variabel dengan var, let, const, dan masukkan value berupa tipe data

// Variabel x dideklarasikan menggunakan "var"
var x = 10;

// Di dalam blok if, kita mengganti nilai variabel x yang telah dideklarasikan sebelumnya
if (x == 10) {
   var x = 3; // Variabel x yang ada di dalam blok if akan mengganti nilai variabel x di luar blok if

   console.log(x);
}

console.log(x); // Nilai variabel x di luar blok if juga akan berubah karena menggunakan "var"

// Variabel xx dideklarasikan menggunakan "let"
let xx = 1;

if (xx == 1) {
    let xx = 3; // Variabel xx yang ada di dalam blok if hanya berlaku di dalam blok if

    console.log(xx);
}

console.log(xx); // Nilai variabel xx di luar blok if tetap sama karena menggunakan "let"

// Variabel aziz dideklarasikan menggunakan "var"
var aziz = "hello aziz";

console.log(aziz);

// Variabel kepo dideklarasikan tanpa nilai, sehingga nilainya "undefined"
var kepo;

console.log(kepo); // Output akan "undefined"

// Variabel kepo2 digunakan untuk menggabungkan variabel "kepo" dan "aziz" dengan template literals
let kepo2 = `${kepo} ${aziz}`;

console.log(kepo2);

// Variabel a dideklarasikan dengan "let" dan nilainya bisa diubah
let a = "hello";
a = "world"; // Nilai variabel "a" diubah menjadi "world"

console.log(a); // Output akan "world"

// Variabel b dideklarasikan dengan "const" dan nilai konstan (tidak bisa diubah)
const b = "hello";
// b = "world"; // Mengubah nilai variabel "b" akan menghasilkan TypeError

console.log(b);

// Variabel c dan d dideklarasikan dengan "let" 
//dan digabungkan menggunakan template literals : template literal atau biasa di sebut template string merupakan fitur ES6 yang memungkinkan kita menyusun string dengan rapi dengan menggunakan tanda petik terbalik dan ${variabelnya}. 
let c = "hello";
let d = "kepo";

console.log(`${c} ${d}`);

// Variabel e dan f dideklarasikan dengan "const" dan digabungkan menggunakan template literals
const e = "hello";
const f = "kepo";

console.log(`${e} ${f}`);

let word = "Abdul Aziz ";

// METHOD DAN PROPERTIES
//properties adalah tempat menyimpan data tapi dalam sebuah object
console.log(word.length); // Output akan 11

//method adalah sebuah fungsi untuk menjalaankan kogika
console.log(word.charAt(0)); // Output akan "A"
console.log(e.concat(f)); // Output akan "hellokepo"
console.log(e.indexOf("o")); // Output akan 4
console.log(e.substring(1, 4)); // Output akan "ell"
console.log(e.substring(1)); // Output akan "ello"
console.log(e.substring(1, 3)); // Output akan "el"
console.log(e.toUpperCase()); // Output akan "HELLO"
console.log(e.toLowerCase()); // Output akan "hello"
console.log(word.trim()); // Output akan "Abdul Aziz"

// MENGUBAH TIPE DATA
//String()
let int = 1234;
let real = 3.45;
let arr = [6, 7, 8];
let strInt = String(int);
let strReal = String(real);
let strArr = String(arr);
console.log (strInt); // Output akan "1234"
console.log (strReal); // Output akan "3.45"
console.log(strReal); // Output akan "1234"
console.log(strArr); // Output akan "6,7,8"

//toString()
let number = [21, 4, 5, 7, 8]
console.log(number.toString()); // Output akan "21,4,5,7,8"

//Number()
let number1 = "1234";
let angka = "1234adfd 54"
let float = "3.45";
console.log(Number(number1)); // Output akan 1234
console.log(Number(angka)); // Output akan NaN
console.log(Number(float)); // Output akan 3.45

//parseInt()
let number2 = "1234";
let float2 = "3.45";
console.log(parseInt(number2)); // Output akan 1234
console.log(parseInt(float2)); // Output akan 3

//parseFloat()
let number3 = "1234";
let float3 = "3.45";
console.log(parseFloat(number3)); // Output akan 1234
console.log(parseFloat(float3)); // Output akan 3.45

//Boolean()
let number4 = "1234";
let float4 = "3.45";
console.log(Boolean(number4)); // Output akan true
console.log(Boolean(float4)); // Output akan true

//OPERATOR DALAM JAVASCRIPT
//Operator Aritmatika
let a1 = 10;
let b1 = 5;
console.log(a1 + b1); // Output akan 15
console.log(a1 - b1); // Output akan 5
console.log(a1 * b1); // Output akan 50
console.log(a1 / b1); // Output akan 2
console.log(a1 % b1); // Output akan 0

// Operator assignment
let angkat;
angkat = 10;
console.log(angkat); // Output akan 10

// Operator perbandingan
let a2 = 10;
let b2 = 5;
console.log(a2 == b2); // Output akan false
console.log(a2 != b2); // Output akan true
console.log(a2 > b2); // Output akan true
console.log(a2 < b2); // Output akan false
console.log(a2 >= b2); // Output akan true
console.log(a2 <= b2); // Output akan false
console.log(a2 == "10"); // Output akan true membandingkan nilai
console.log(a2 === "10"); // Output akan false membandingkan nilai dan tipedate
console.log(a2 === 10); // Output akan true membandingkan nilai dan tipedate
console.log(a2 !== "10"); // Output akan true membandingkan nilai dan tipedate

// Operator logika
let a3 = 10;
let b3 = 5;
console.log(a3 < 15 && b3 > 3); // Output akan true
console.log(a3 < 15 && b3 < 3); // Output akan false
console.log(a3 > 15 && b3 < 3); // Output akan false
console.log(a3 > 15 && b3 > 3); // Output akan false

console.log(a3 < 15 || b3 < 3); // Output akan true
console.log(a3 < 15 || b3 > 3); // Output akan true
console.log(a3 < 15 || b3 > 3); // Output akan true 
console.log(a3 > 15 || b3 < 3); // Output akan false

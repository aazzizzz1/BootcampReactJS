let namaLengkap;
namaLengkap = "Abdul Aziz";
console.log(namaLengkap);

let first = "Aziz";
let last = "Nur";

console.log(first + " " + last);
console.log(`${first} ${last}`);

let panjang = "10";
let lebar = "5";

let panjangInt = parseInt(panjang);
let lebarInt = parseInt(lebar);

let keliling = 2*(panjangInt+lebarInt);
console.log(keliling);

let sentence = "Saya ingin belajar bersama";

let satu = sentence.substring(0,4); // kata index terakhir tidak dihitung
let dua = sentence.substring(5,11);
console.log(`${satu} ${dua}`);
console.log(sentence.slice(10,19));

var nilaiDoe = 50;
var index = "";
if (nilaiDoe > 80 && nilaiDoe <100) {
    index = "indexnya A"
} else if (nilaiDoe > 70 && nilaiDoe < 80) {
    index="indexnya B"
} else if (nilaiDoe > 60 && nilaiDoe < 70) {
    index="indexnya C"
} else if (nilaiDoe > 50 && nilaiDoe < 60) {
    index="indexnya D"
} else if (nilaiDoe > 0 && nilaiDoe <= 50) {
    index="indexnya E"
} else {
    index="indexnya invalid"
}

console.log(`${nilaiDoe} ${index}`);

let angka = 2;

let tenary = angka == 2 ? "angkanya 2" : "bukan angka 2";
console.log(tenary);

var trafficLight = "merah";

switch(trafficLight) {
    case 1: {console.log(`matikan TV!`); break;}
    case 2: {console.log(`turunkan volume TV!`); break;}
    case 3:{console.log(`tingkatkan volume TV`); break;}
    case 4: {console.log(`matikan TV!`); break;}
    default: {console.log(`invalid`); break;}
}

console.log(`traffic light ${trafficLight}`);

let tokoBuka = "open";
let telur = "ada";

if (tokoBuka =="open"){
    if (tokoBuka == "open" && telur == "ada"){
        console.log("saya beli telur");
    } else { console.log("saya tidak beli telur");}
} else { console.log("toko tutup");}


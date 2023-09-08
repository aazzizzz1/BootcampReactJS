//loping angka 1 sampai 9

for(index = 1; index < 10; index++){
    console.log("angka", index);
}

//looping jumlah
var jumlah = 0;

for(index = 1; index<10; index++){
    jumlah += index;
    console.log("jumlah", jumlah);
} console.log("jumlah saat ini:", jumlah);

// increment 2
for(index =1; index <20; index += 2){
    console.log("index ditambah 2", index);
}

// decrement 3
for(index=30; index>0; index-=3){
    console.log("index dikurang 3", index);
}

// looping conditional
for(index=1; index<20; index++){
    if (index == 3) {
        console.log("index ke 2", index);
    } else {
        console.log(index);
    }
}

// looping while
var index = 1;
while (index < 10) {
    console.log("tampilkan angka:", index);
    index++;
}

while (index < 30) {
    jumlah += index;
    console.log("jumlah saat ini:", jumlah);
    index++
} console.log("jumlah terakhir:", jumlah);

var coba=0;

while(coba < 10){
    if (coba % 2 == 0) {
        console.log("angka genap:", coba);
    } else{
        console.log("angka ganjil:", coba);
    }
    coba++;
}

//ARRAY 
// properties atau atribut dari array length
var arr =["makan", "mandi", "tidur", "minum"];
var arrnumbers=[1,2,3,4,5,6,7,8,9,10];

console.log(arr);
console.log(arr[0]);
console.log(arr.length);

console.log(arr[arr.length-1]);

//method dari array (berdasarkan index)
console.log(arr.push("nonton","futsal")); //menambahkan data di akhir array
console.log(arr);

console.log(arr.pop()); //menghapus data di akhir array tanpa parameter
console.log(arr);

console.log(arr.unshift("nonton","futsal")); //menambahkan data di awal array
console.log(arr);

console.log(arr.shift()); //menghapus data di awal array tanpa parameter
console.log(arr);

arr.sort((a, b) => (a - b)); //mengurutkan data array default secara ascending rendah ke tinggi(naik) (A-Z), kebalikan dari descending menurun (turun)
console.log(arr); 

var potongan = arr.slice(1,3); //harus ditampung di variable baru, mengambil data array dari index 1 sampai 3 tidak mengikutkan yang trakhir
console.log(potongan);

var potonganangka = arrnumbers.slice(1,3); //mengambil data array dari index 1 sampai 3 tidak mengikutkan yang trakhir
console.log(potonganangka);

// array.splice([IndexMulai], [JumlahNilaiYangDihapus], [NilaiYangDitambahkan1], [NilaiYangDitambahkan2], ...);
arr.splice(1, 0, "hobi", "mutah"); //menambahkan data di index 1 dan menghapus 0 data
console.log(arr);

arr.splice(1, 5, "hobi"); //menambahkan data di index 1 dan menghapus 5 data
console.log(arr);

var arrsplit = "saya, ingin, belajar, bersama";
var splitcoma = arrsplit.split(","); //mengubah string menjadi array dipisahkan coma
console.log(splitcoma);

var arrsplittitikdua = "saya: ingin: belajar: bersama";
var splittitikdua = arrsplittitikdua.split(":"); //mengubah string menjadi array dipisahkan titik dua
console.log(splittitikdua);

var arrjoin= ["saya", "ingin", "belajar", "bersama"];
var slug = arrjoin.join("-"); //mengubah array menjadi string dipisahkan -
console.log(slug);
var slug = arrjoin.join(" "); //mengubah array menjadi string dipisahkan spasi
console.log(slug);

// Array ES6 JS
// Destructuring
let numbers=[1,2,3];
let [satu, dua, tiga] = numbers // memecah array kedalam variable lain
console.log(satu);

//Rest Parameter
let rest = [1,2,3,4,5];
let [saturest, ...params] = rest // ... menggabungkan function yang tersisa kedalam array
console.log(saturest);
console.log(params);

//Spread Opperators ...
//Spread Operator digunakan untuk membagi elemen array atau properti pada objek, sehingga elemen array dapat ditambahkan/dimasukan ke dalam array baru
let spread = [1,2,3,4,5,6,7,8,9];
let comb = [10,11,12,13,14];
let combin = [15,16,17,18];

let combineArray = [...spread, ...comb, ...combin];
console.log(combineArray);

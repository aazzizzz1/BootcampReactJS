function hai() {
    console.log("Hai Aziz");
}
hai();

function munculAngka() {
    return 2
}
console.log(munculAngka());

function kaliDua(params) {
    return params * 2;
}
let kalikan = kaliDua(10);
console.log(kalikan);

//Function penjumlahan 2 parameter
function penjumlahan(params1, params2) {
    return params1 + params2
}
console.log(penjumlahan(5, 6)); //argumen

//insialisasi parameter secara langsung
function arpenjumlahan (params1 = 7, params2 = 8){ 
    return params1 + params2;
}
console.log(arpenjumlahan()); // default
console.log(arpenjumlahan(10, 50));

function retpenjumlahan(params1, params2){ // return array object
    return [
        {hasil : params1 + params2}
    ];
}
console.log(retpenjumlahan(2, 7));

//Function Conditional
function conditional(params1, params2) {
    let hasil = params1 * params2;

    if (hasil > 10) {
        console.log("perkalian anda lebih dari 10 hasilnya", hasil)
    } else if (hasil < 10){
        console.log("Hasil kurang dari 10 :", hasil)
    }
    else if (hasil == 10) {
        console.log("hasilnya sama", hasil)
    } else {
        return "Masukan angka"
    }
}
//print function
conditional(7, 9);

//Function Looping
function looping(panjang) {
    let tampung = 0;
    for (let index = 0; index < panjang; index++) {
        tampung += index;
        console.log(`Hasil iterasi sebanyak : ${index} dan jumlahnya: ${tampung}`)
    }
}
looping(5);

//Aonim Function
let tambahkan = function(params1, params2) {
    return params1 + params2
}
console.log("function anonim: ",tambahkan(1, 3))

// FUNCTION ES6 Arrow
let tambah = (params1, params2) => {
    return params1 + params2;
}
console.log("function ES6: ",tambah(5, 7));

//Dafault Paramter
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 2));
console.log(multiply(5)); // default b=1

// Rest Parameters in Funtion 
// Rest Parameter ini berguna untuk menggabungkan semua paramater pada function ke dalam array
const filter = (...rest) =>{ //...rest tak terbatas parameter
    return rest.filter(el => el.text !== undefined) // parameter key text tidak sama dengan undefined
}
console.log(filter(1, {text: "Aziz"}, "lanjutkan"));

const fullName = (...rest) =>{
    let [firstName, lastName] = rest
    console.log(`Nama depan : ${firstName} Nama Belakang: ${lastName}`);
}

fullName("Aziz", "Kepo");

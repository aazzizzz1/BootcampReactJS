function cetakFunction() {
    return "Nama Aku Aziz"
}
console.log(cetakFunction());

let angka1 = 20;
let angka2 = 7;

function myFunction(params1, params2){
    return params1 + params2;
}
let output = myFunction(angka1, angka2);
console.log(output);

const Hello = () => {
    return "Hello"
}
console.log(Hello());

let obj = {
    nama: "john", 
    umur: 22,
    bahasa: "Indonesia"
}
console.log(obj.bahasa)

let arrayDaftarPeserta = ["john Doe", "Laki-laki", "Baca buku", 1992]
let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunLahir: arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta)

let buah = [
    {nama: "Nanas", warna: "Kuning", adaBijinya: false, harga: 9000},
    {nama: "Jeruk", warna: "Orange", adaBijinya: true, harga: 8000},
    {nama: "Semangka", warna: "Hijau dan Merah", adaBijinya: true, harga: 10000},
    {nama: "Pisang", warna: "Kuning", adaBijinya: false, harga: 5000}
]
let filterBuah = buah.filter(function(items){
    return items.adaBijinya != true;
})
console.log(filterBuah);

let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
}

let {name, brand, year} = phone
console.log(name, brand, year);

let dataBukuTambahan = {
    penulis: "John Doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemrograman dasar",
    jumlahHalaman: 172
}
let objOutput = {...dataBukuTambahan, ...buku}
console.log(objOutput)

let mobil = {
    merk: "bmw",
    color: "red",
    year: 2002
}
const functionObject = (params) => {
    return params
}

console.log("Ini adalah function untuk object: ", functionObject(mobil));
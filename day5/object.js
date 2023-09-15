//OBJECT
let a = {name: "aziz", age: 20, address: "jakarta", hobby: "gaming"}; // object key and value bisa tidak berurutan
// beda sama array harus urut dengan index 
let array = [1,2,3,4,5,6];
console.log(a.name);

let b ={name:"aziz", hobby: "gaming", adress:"Banyuwangi", age: 20};
console.log(array[0]); // array index 0
console.log(b.name); // object key name

let car = {type: "civic", year: 2001, "hourse power" : 3000, color:"red" };
console.log(car["hourse power"]); // object key hourse power jika ada spasi harus pakai tanda kutip

//Deklarasi Object Kosong
let car2 = {};

car2.name = "Lamborgini";
car2.models = "sport";
car2["hourse power"] = 50000;
car2.year = 2002;
car2.array = ["aziz", 1, "naya"];

console.log(car2);
console.log(car2.models);
console.log(car2["hourse power"]);

//ARRAY OF OBJECT
let mobil = [
    {merek:"civic turbo", age:23, model:"sport", type:"masuk"},
    {merek:"civic turbo", age:23, model:"leh uga", type:"hai", kepo:"coba"}
]
console.log(mobil[0].merek);
console.log(mobil[1].kepo);

//ARRAY ITERATION
// forEach() map() filter() reduce() every() some() indexOf() includes()

//forEach
mobil.forEach(function(item) {
    console.log(item);
    console.log("models mobil ada :", item.model);
});

//Map membuat array baru 
let maparrayofobject = mobil.map(function(items){
    return items;
})
console.log(maparrayofobject);

//Filter
let filterobject = mobil.filter(function(items){
    return items.model != 'sport' ;
})

console.log("filter objectnya",filterobject);

//ES6
//Destructuring merupakan ekspresi javascript yang memungkinkan untuk membagi atau memecah nilai dari sebuah array atau objek ke dalam variabel yang berbeda

let objectn = {name: 'aziz', hobby: 'futsal', power: 6000};
const {name: namanya, hobby: hobbynya, power: powernya} = objectn;
console.log(namanya);

let studentName = {
    firstName: 'Peter',
    lastName: 'Parker'
};
const {firstName, lastName} = studentName //destrukturing nama variable = nama key
console.log(firstName)

let object = {name: 'aziz', hobby: 'futsal', power: 6000};
const {name, hobby, power} = object
console.log(hobby);

//Spread Operator
//Spread Operator digunakan untuk membagi elemen array atau properti pada objek, sehingga elemen array dapat ditambahkan/dimasukan ke dalam array baru
// key yang berbeda
let obbspread1 = {name: 'aziz', hobby: 'futsal', power: 6000};
let obbspread2 = {namaLengkap: 'putri', kesukaan:"beranang"};

let spread1 = {...obbspread1, beladiri :"silat"}; // bisa menambahkan dan menggabungkan
console.log(spread1);

let gabungan = {...obbspread1, ...obbspread2, ...car2};
console.log(gabungan);

//Enhanced object literals 
// Enhanced object literals merupakan fitur ES6 yang memungkinkan kita untuk menyederhanakan sebuah object

let nama = "aziz";
let kegemaran = "pencak silat";
let umur = 23;

const gabung = {nama, kegemaran, umur};
console.log(gabung);
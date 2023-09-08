for (index = 0; index <10; index++){
    console.log(index);
}

for (index = 0; index < 10; index++){
    if(index % 2 === 0){
        console.log(index);
    }
}

for (index = 0; index < 10; index++){
    if(index % 2 === 0){
        console.log(index);
    }
}

let array1 = [1,2,3,4,5,6];

const coba = array1[5];
console.log(coba);

let array2 = [5,2,4,1,3,5];
array2.sort((a, b) => (a - b));
console.log(array2);

// 6
let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"];
for(index = 0; index < array3.length; index++){
    let pecah = array3[index];
    console.log(pecah);
}

// 7 
let array4 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];
for(index =0; index < array4.length;index++){
    let keluar = array4[index];
    if(keluar % 2 ===0){
        console.log(keluar);
    }
}

// 8
let kalimat= ["saya", "sangat", "senang", "belajar", "javascript"]
let tampung = kalimat.join(" ");
console.log(tampung);

//9
var sayuran=[];
sayuran.push("kangkung", "bayam", "buncis", "kubis", "timun", "seledri", "taoge");
console.log(sayuran);
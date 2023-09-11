// Function Promise didalam function dan resolve reject tidak bisa dijalankan bersamaan
const myFunctionPromise = (params) => { //menambahkan parameter
    return new Promise(( resolve, reject) => {
        if (params === 2 ) {
            resolve("Ini adalah promise berhasil");
        } else {
            reject("ini adalaah promise gagal");
        }
    }) 
}

//CARA MENJALANKAN DENGAN THEN DAN CATCH 
//dengan memanggil Funstionya langsung
myFunctionPromise(2) // mengirimkan parameter
.then((result) => {
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});

//CARA menjalankan dengan Async Await 
//dengan menaruh di function lagi
// menaruh await di variable
const asawPromise = async () => {
    try {
        let coba = await myFunctionPromise(3)
        console.log("Ini adalah async dan await:", coba);
    } catch (error) {
        console.log("Ini adalah error async dan await :", error);
    }
}
asawPromise();
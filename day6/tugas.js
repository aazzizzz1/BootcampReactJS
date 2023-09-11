// soal 1
const myCountPromise = (params1, params2) => {
        return new Promise ((resolve, reject)=>{
            if (params1 != undefined && params2 != undefined) {
                // setTimeout(()=>{
                // let kali = params1*params2
                // resolve(`Hasil perkalianya: ${kali}`);
                // }, 3000)
                let kali = params1*params2
                resolve(`Hasil perkalianya: ${kali}`);
            } else {
                reject("Masukan parameter terlebih dahulu");
            }
        })
}

myCountPromise(2, 5)
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})

// soal 2
function filterBooksPromise(colorful, amountOfPage) {
    return new Promise ((resolve, reject)=>{
        let books = [
            {name:"Shinchan", totalPage: 50, isColorful: true},
            {name:"Kalkulus", totalPage: 250, isColorful: false},
            {name:"Doraemon", totalPage: 40, isColorful: true},
            {name:"Algoritma", totalPage: 250, isColorful: false},
        ]
        if (amountOfPage >= 40 ) {
            resolve(books.filter(x => x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
            let reason = "Maaf buku anda dibawah 40 halaman enggak ada";
            reject(reason);
        }
    })    
}

//Async Await
const filterBookku = async () => {
    try {
    let buku1 = await filterBooksPromise(true, 70);
    console.log("buku satu", buku1);

    let buku2 = await filterBooksPromise(true, 40);
    console.log("buku satu", buku2);

    let buku3 = await filterBooksPromise(false, 250);
    console.log("buku satu", buku3);

    } catch (error) {
    console.log("Gagal", error);
    }
}
filterBookku();

// const filterBooks = async () => {
//     try {
//         const buku1 = await filterBooksPromise(true, 40);
//         console.log("Buku 1:", buku1);

//         const buku2 = await filterBooksPromise(false, 250);
//         console.log("Buku 2:", buku2);

//         const buku3 = await filterBooksPromise(true, 30);
//         console.log("Buku 3:", buku3);
//     } catch (error) {
//         console.log("Gagal", error);
//     }
// };
// filterBooks();

// const filterBooks = async () => {
//     try {
//         let buku1 = await filterBooksPromise(true, 40);
//         let buku2 = await filterBooksPromise(false, 250);

//         console.log("Buku 1:", buku1);
//         console.log("Buku 2:", buku2);
//     } catch (error) {
//         console.log("Gagal", error);
//     }
// };
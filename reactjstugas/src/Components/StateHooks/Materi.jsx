import React from 'react'
import { useState } from 'react' // harus didalam bracket karena method

const StateHooks = () => {
const [name, setName] = useState("Aziz"); // bisa dipakai di component itu sendiri biasnya
const [gender, setGender] = useState("Laki-laki");
const [array, setArray] = useState(["hai", "cobain", "array"]);
const [object, setObject] = useState({name:"Aziz", umur:19, pekerjaan:"developer"})
const [count, setCount] = useState(0);
const [panggilan, setPanggilan] = useState("Pak");
// name = "Aziz"; // tidak bisa akan error karena akan terus di render

const handleName = () =>{ // harus dimasukan hooks agar tidak error
    setName( name === "Aziz" ? "Zizi" : "Aziz");
    setGender(name === "Zizi" ? (gender === "Laki-laki" ? "Perempuan" : "Laki-laki") : "Perempuan");
    setPanggilan(name === "Aziz" ? "Pak" : "Buk"); // Perubahan ini menyesuaikan panggilan
}

const handleCount = () => {
  if (count < 10){
    setCount(count + 1);
  } else {
    alert("Anda tidak bisa melebihi angka 10")
  }
}

  return (
    <>
    <br />
    {/* { panggilan === "aziz" ? <span>Pak</span> : <span>Buk</span>} */}
    <p>Panggilan saya : {panggilan}</p>
    <p>Set nama aku adalah : {name}</p>
    <p>Gender Aku : {gender}</p>
    <button onClick={handleName}>ganti nama</button>
    <p>{`aku adalah array : ${array}`}</p>
    <p>{`aku adalah array : ${object.name} ${object.pekerjaan}`}</p>
    <p>{`tambah angka : ${count}`} </p>
    <button onClick={handleCount}>tambah</button>
    </>
  )
}

export default StateHooks
import axios from "axios";
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  //State Global
    const [input, setInput] = useState({
    name: "",
    course: "",
    score: 0,
    });
    const [fetchStatus, setfetchStatus] = useState(true);
  // state data
  let [data, setData] = useState(null); //harus memakai state karena react akan merender parameter ini sialisasi terlebih dahulu, disarankan null agar enak pengkondisianya
  // Menginputkan Data kedalam form
    const [curretID, setcurrentID] = useState(-1);

  //Function dan Method Global
  //Function Fetch Data
    let fetchData = () => {
    const fetchData = async () => {
        try {
        const result = await axios.get(
            "https://backendexample.sanbercloud.com/api/student-scores"
        );
        let hasil = result.data; // Data API
        setData([...hasil]); // assign data ke dalam method setData Bisa menggunakan SPREAD OPERATOR atau tidak
        // console.log(result.data); // mengambil hanya datanya saja akan ada array of object dari API
        // console.log(result); // menampilkan result dari API berupa object asli APInya
        } catch (err) {
        console.log(err);
        }
    };
    fetchData();
    setfetchStatus(false);

    // method fetch data menggunakan then catch
    // useEffect(()=>{
    //   axios.get('https://backendexample.sanbercloud.com/api/contestants')
    //   .then((result)=>{
    //     let hasil = result.data //Data API
    //     setData(hasil) //assign data kedalam method setData
    //     // console.log(result.data); // menganmbil hanya datanya saja akan ada array of object dari API
    //     // console.log(result); // menampilkan result dari API berupa object asli APInya
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //   })
    // }, [])

    // console.log(data) // menampilkan data yang sudah di assign kedalam setData
    };

  // Method Handle Inpur
    const handleInput = (events) => {
    let value = events.target.value;
    let name = events.target.name;

    // console.log(`${name}, ${score}, ${course}, ${value}`)

    if (name === "name") {
        setInput({ ...input, name: value });
    } else if (name === "course") {
        setInput({ ...input, course: value });
    } else if (name === "score") {
        setInput({ ...input, score: value });
    }
    };
  //Method Mengganti Nilai
    let handleNilai = (nilai) => {
    if (nilai >= 80) {
        return "A";
    } else if (nilai >= 70 && nilai < 80) {
        return "B";
    } else if (nilai >= 60 && nilai < 70) {
        return "C";
    } else if (nilai >= 50 && nilai < 60) {
        return "D";
    } else {
        return "E";
    }
    };

  // Submit Form Create
    const handleSubmit = (events) => {
    events.preventDefault();

    const { name, course, score } = input;
    if (curretID === -1) {
        axios
        .post("https://backendexample.sanbercloud.com/api/student-scores", {
            name,
            course,
            score,
        })
        .then((result) => {
            console.log(result);
            setfetchStatus(true);
        })
        .catch((error) => {
            alert(error);
        });
    } else {
        axios
        .put(
            `https://backendexample.sanbercloud.com/api/student-scores/${curretID}`,
            {
            name,
            course,
            score,
            }
        )
        .then((result) => {
            console.log(result);
            setfetchStatus(true);
        })
        .catch((error) => {
            alert(error);
        });
    }

    //balikan lagi agar tidak bug agar bisa create data
    setcurrentID(-1);

    //balikin input ke deafault
    setInput({
        name: "",
        course: "",
        score: 0,
    });
    };

  //Delete Data by ID
    let handleDelete = (e, userId) => {
    e.preventDefault();
    axios
        .delete(
        `https://backendexample.sanbercloud.com/api/student-scores/${userId}`
        )
        .then((result) => {
        // console.log(result)
        setfetchStatus(true);
        })
        .catch((error) => {
        alert(error);
        });
    };

  //Menampilkan Data Kedalam Form
    let handleEdit = (e, userId) => {
    setcurrentID(userId);

    e.preventDefault();
    axios
        .get(
        `https://backendexample.sanbercloud.com/api/student-scores/${userId}`
        )
        .then((res) => {
        let reslutedit = res.data;
        // console.log(reslutedit)
        setInput({
            name: reslutedit.name,
            course: reslutedit.course,
            score: reslutedit.score,
        });
        })
        .catch((err) => {
        alert(err);
        });
    };

  //Membuat Variable untuk semua state dan function
  //Variable Global State
    let state = {
    input,
    setInput,
    fetchStatus,
    setfetchStatus,
    data,
    setData,
    curretID,
    setcurrentID,
    };

  // Variable Global Function
    let handleFunction = {
    fetchData,
    handleInput,
    handleNilai,
    handleSubmit,
    handleDelete,
    handleEdit,
    };

  // Membuat Global Context State
    return (
    //Destructuring
    //mengirimkan state dan function yang akan di gunakan komponen lain
    <GlobalContext.Provider
        value={{
        state,
        handleFunction,
        }}
    >
        {props.children}
    </GlobalContext.Provider>
    );
};

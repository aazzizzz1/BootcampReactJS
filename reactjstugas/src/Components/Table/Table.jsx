import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Table = () => {

  const [seen, setSeen] = useState(false)
  const [input, setInput] = useState({
    name: "",
    course: "",
    score: 0,
  })
  const [fetchStatus, setfetchStatus] = useState(true)

  const handleInput = (events) => {
    let value = events.target.value
    let name = events.target.name

    // console.log(`${name}, ${score}, ${course}, ${value}`)

    if(name === "name"){
      setInput({...input,
        name : value,
      })
    } else if ( name === "course"){
      setInput({...input,
        course : value,
      })
    } else if ( name === "score"){
      setInput({...input,
        score : value,
      })
    }
  }

  const handleSubmit = (events) => {
    events.preventDefault();

    const { name, course, score } = input;
      axios
        .post('https://backendexample.sanbercloud.com/api/student-scores', {
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

      setInput({
        name: '',
        course: '',
        score: 0,
      });
    }

  // Fungsi untuk menampilkan modal edit dengan data yang akan diedit
  const openEditModal = (e, userId) => {
    e.preventDefault();
    axios
      .get(`https://backendexample.sanbercloud.com/api/student-scores/${userId}`)
      .then((res) => {
        const reslutedit = res.data;
        console.log(reslutedit);
        // Mengisi data yang akan diedit dan mengaktifkan mode edit
        setInput({
          name: reslutedit.name,
          course: reslutedit.course,
          score: reslutedit.score,
        });
        togglePop();
      })
      .catch((err) => {
        alert(err);
      });
  };

    function togglePop () {
        setSeen(!seen);
    };

  // state data
  let [data, setData] = useState(null) //harus memakai state karena react akan merender parameter ini sialisasi terlebih dahulu, disarankan null agar enak pengkondisianya
  //Fatch data TUGAS menggunakan Async Await 
  useEffect(() => {
    if( fetchStatus === true){
      const fetchData = async () => {
      try {
        const result = await axios.get('https://backendexample.sanbercloud.com/api/student-scores');
        let hasil = result.data; // Data API
        setData([...hasil]); // assign data ke dalam method setData Bisa menggunakan SPREAD OPERATOR atau tidak
        // console.log(result.data); // mengambil hanya datanya saja akan ada array of object dari API
        // console.log(result); // menampilkan result dari API berupa object asli APInya
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    setfetchStatus(false)
    }
    
  }, [fetchStatus, setfetchStatus]);

// method fetch data then catch
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
  }

  let handleDelete = (e, userId) => {
    e.preventDefault();
    axios
      .delete(`https://backendexample.sanbercloud.com/api/student-scores/${userId}`)
      .then((result) => {
        // console.log(result)
        setfetchStatus(true);
      })
      .catch((error) => {
        alert(error);
      });
  };

  let handleEdit = (e, userId) => {
    e.preventDefault();
    axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${userId}`)
    .then((res)=>{
      let reslutedit = res.data
      console.log(reslutedit)
      setInput({
        name: input.name,
        course : input.course,
        score : input.score
      })
    })
    .catch((err)=>{
      alert(err)
    })
  }
  

return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
  <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
    <div className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
    {/* <button onClick={togglePop}>Create Data</button>
      {seen ? <CreateData toggle={togglePop} /> : null} */}
      {/* <button>Create Data</button> */}
      {/* <CreatePopUp/> */}
      {/* Modal toggle */}
      <button
        data-modal-target="createdata-modal"
        data-modal-toggle="createdata-modal"
        type="button"
      >
        Toggle modal
      </button>
    </div>
    <div>
      <button
        id="dropdownActionButton"
        data-dropdown-toggle="dropdownAction"
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        type="button"
      >
        <span className="sr-only">Action button</span>
        Action
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        id="dropdownAction"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownActionButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Reward
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Promote
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Activate account
            </a>
          </li>
        </ul>
        <div className="py-1">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Delete User
          </a>
        </div>
      </div>
    </div>
    <label htmlFor="table-search" className="sr-only">
      Search
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        id="table-search-users"
        className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search for users"
      />
    </div>
  </div>
  {/* Tabel */}
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="p-4">
          <div className="flex items-center">
            <input
              id="checkbox-all-search"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-all-search" className="sr-only">
              checkbox
            </label>
          </div>
        </th>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          Nilai
        </th>
        <th scope="col" className="px-6 py-3">
          Hasil
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    {/* Body Tabel */}
    {/* Fetch Data */}
    {data == null && <p>Loading Data...</p>}
    {data !== null && data.map((element)=>{
      return (
        <>
        <tbody key={element.id}>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-2" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Jese "
              />
              <div className="pl-3">
                <div className="text-base font-semibold">{element.name}</div>
                <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
              </div>
            </th>
            <td className="px-6 py-4">{`${element.score}`}</td>
            <td className="px-6 py-4">{handleNilai(element.score)}</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />{" "}
                Online
              </div>
            </td>
            <td className="px-6 py-4">
              {/* Modal toggle */}
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                onClick={(e) => openEditModal(e, element.id)}
                data-user-id={element.id}
              >
                Edit user
              </a>
              <a
              href="#"
              className="font-medium text-red-600 dark:text-red-500 hover:underline ml-3"
              onClick={(e) => handleDelete(e, element.id)}
              data-user-id={element.id}
              >
              Delete user
            </a>
            </td>
          </tr>
        </tbody>
        </>
      )
    })}
  </table>
    {/* Main modal Create Data */}
  <div
    id="createdata-modal"
    tabIndex={-1}
    aria-hidden="true"
    className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
    <div className="relative w-full max-w-md max-h-full">
      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="createdata-modal"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Create Data
          </h3>
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Kamu
              </label>
              <input
                onChange={handleInput}
                type="text"
                name="name"
                id="name"
                value={input.name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Abdul Aziz"
                required=""
              />
            </div>
            {/* {input.name} melihat inputan */}
            <div>
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Course
              </label>
              <input
                onChange={handleInput}
                type="text"
                name="course"
                id="course"
                value={input.course}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Biologi"
                required=""
              />
            </div>
            {/* {input.course} melihat inputan */}
            <div>
              <label
                htmlFor="number"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Masukan Nilai
              </label>
              <input
                onChange={handleInput}
                value={input.score}
                type="number"
                name="score"
                id="score"
                placeholder="0"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
              />
            </div>
            {/* {input.score} melihat inputan */}
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create Data
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Table
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function BookTicket({ name }) {
  const [username, setUsername] = useState("");
  const [already, setAlready] = useState(false);
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const data = localStorage.getItem("username");

    if (data !== undefined && data !== null) {
      setAlready(true);
      setUsername(data);
    }
  }, []);

  return (
    /*     <div className="m-10 p-16 border border-white flex flex-col gap-10">
      <input className="w-full bg-blue-50 "></input>
      <input className="w-full " value={name}></input>
    </div> */
    <div>
      {alert === true && (
        <div className="mb-10 p-4 bg-green-200 text-green-950 rounded-full ">
          Your response is successfully saved to localStorage
        </div>
      )}
      {already === true && !alert && (
        <div className="mb-10 p-4 bg-green-200 text-green-950 rounded-full ">
          username already in localStorage!
        </div>
      )}
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="movie name"
          >
            Movie Name
          </label>
          <input
            class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={name}
          />
          <p class="text-red-500 text-xs italic flex justify-center">
            Please choose a Username.
          </p>
        </div>
        <div className="flex items-center justify-center w-full ">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {
              localStorage.setItem("username", username);
              setAlert(true);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookTicket;

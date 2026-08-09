//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";

import "./App.css";

function App() {
  return (
    <>
      <div className="bg-[#ececec] min-h-screen flex items-center justify-center ">
        <form
          className="
                 bg-white
                 w-96
                 p-6
                 rounded-xl
                 shadow-lg
                 has-[:focus]:ring-2 
                 has-[:focus]:ring-blue-400">
        
            
          <h1 className="text-black text-2xl font-bold">Sign Up</h1>

          <input type="email"  required placeholder="Enter your Email address"
            className="
              peer
              w-full 
              mt-4 
              p-3
              border 
              rounded-lg 
              placeholder:text-gray-400
              focus:border-blue-500
              focus:outline-none
              invalid:border-red-500
          "/>

          <p className="
          
             hidden
             peer-invalid:block
             text-red-500
             mt-2 
          ">   
          
            Please enter a valid email.

          </p>

          <button className="
             
             mt-6
             px-6
             py-3
             bg-blue-500
             rounded-lg
             text-white
             text-xl
             hover:bg-blue-600
             active:bg-blue-800
             disabled:opacity-50

          
          ">
            Submit
          </button>

        </form>

      </div>
    </>
  );
}

export default App;

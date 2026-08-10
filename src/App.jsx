//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";

import "./App.css";

function App() {
  return (
    <>
      
      <div className="min-h-screen bg-salte-100 flex items-center justify-center p-4 md:p-8">

        <div className="w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-xl md:flex md:max-w-3xl lg:max-w-4xl">

          <div className="flex h-52 items-center justify-center bg-slate-900 md:h-auto md:w-2/5">
            <p className="text-3xl font-bold text-white lg:text-4xl">
              Tailwind Css
            </p>
          </div>

          <div className="p-6 md:w-3/5 md:p-10 lg:p-12">
            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl lg:text-4xl ">
              Responsive Design
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
              Learn how to build responsive interfaces with Tailwind Css.
            </p>
            <button className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 md:w-auto">
              Start Learning
            </button>

          </div>

        </div>

      </div>
  
    </>
  );
}

export default App;

//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";

import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        
        <div className="w-[600px] bg-slate-800 rounded-3xl shadow-2xl p-16 text-center">
          
          <h1 className="text-6xl font-bold text-white mb-8">
            Tailwind CSS
          </h1>

          <p className="text-3xl text-slate-300 mb-12">
            Learning utility classes
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 text-white text-2xl font-bold px-16 py-5 rounded-2xl shadow-lg">
            Start Learning
          </button>

        </div>
      </div>
    </>
  );
}

export default App;

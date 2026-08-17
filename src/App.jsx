//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";

import "./App.css";

import { useState } from "react";

function App() {
  
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {

    const nextMode = !darkMode;

    setDarkMode(nextMode);

    document.documentElement.classList.toggle(
      "dark",
      nextMode
    );
  }

  return (
    <div
      className="
        min-h-screen
        bg-slate-100
        p-4
        transition-colors

        md:p-8

        dark:bg-slate-950
      "
    >
      <div
        className="
          mx-auto
          max-w-xl
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-xl

          md:p-10

          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        <div className="flex items-center justify-between gap-4">

          <div>
            <h1
              className="
                text-2xl
                font-bold
                text-slate-900

                md:text-3xl

                dark:text-white
              "
            >
              Account Settings
            </h1>

            <p
              className="
                mt-2
                text-slate-600

                dark:text-slate-400
              "
            >
              Manage your profile and preferences.
            </p>
          </div>

          <button
            onClick={toggleDarkMode}
            className="
              rounded-xl
              border
              border-slate-300
              px-4
              py-2
              text-sm
              font-medium
              text-slate-700

              hover:bg-slate-100
              active:bg-slate-200

              dark:border-slate-700
              dark:text-slate-200
              dark:hover:bg-slate-800
              dark:active:bg-slate-700
            "
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div className="mt-8">

          <label
            className="
              text-sm
              font-medium
              text-slate-700

              dark:text-slate-300
            "
          >
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className="
              mt-2
              w-full
              rounded-xl
              border
              border-slate-300
              bg-white
              px-4
              py-3
              text-slate-900

              placeholder:text-slate-400

              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500

              dark:border-slate-700
              dark:bg-slate-800
              dark:text-white
              dark:placeholder:text-slate-500
              dark:focus:border-blue-400
              dark:focus:ring-blue-400
            "
          />

        </div>

        <button
          className="
            mt-6
            w-full
            rounded-xl
            bg-blue-600
            px-4
            py-3
            font-semibold
            text-white

            hover:bg-blue-700
            active:bg-blue-800

            focus:ring-2
            focus:ring-blue-500

            md:px-6

            dark:bg-blue-500
            dark:hover:bg-blue-400
            dark:active:bg-blue-600
            dark:focus:ring-blue-400
          "
        >
          Save Changes
        </button>

      </div>
    </div>
  
  
    
  );
}

export default App;

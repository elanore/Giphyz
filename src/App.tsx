import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
//import "./App.css";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="App h-full min-h-screen bg-neutral-100  text-4xl font-bold text-blue-500 text-center p-4 font-light dark:bg-black dark:text-stone-500">
        <Link to="/" data-testid="gifs">
          <h1 className="no-underline dark:text-teal-400 ">GIFz</h1>
        </Link>
        <Outlet />
        <button
          className="absolute w-16 h-16 top-2 right-16 bg-neutral-800 dark:bg-white rounded-lg text-white dark:text-black font-thin text-sm "
          onClick={toggleDarkMode}
        >
          {darkMode ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
};

export default App;

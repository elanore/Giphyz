import React from "react";
import { Link, Outlet } from "react-router-dom";
//import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App text-4xl font-bold text-cyan-600 text-center h-screen bg-black p-4">
      <Link to="/" data-testid="gifs">
        GIFz
      </Link>
      <Outlet />
    </div>
  );
};

export default App;

import React from "react";
import { Link, Outlet } from "react-router-dom";
//import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App h-full min-h-screen bg-blue-300 text-4xl font-bold text-blue-900 text-center p-4">
      <Link to="/" data-testid="gifs">
        <h1 className="no-underline">GIFz</h1>
      </Link>
      <Outlet />
    </div>
  );
};

export default App;

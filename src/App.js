import React from "react";
import Square from "./Components/Square";

const App = () => {
  return (
    <main className="h-screen bg-slate-200">
      <div className="h-[50vh]  bg-slate-600">
        <Square />
      </div>
    </main>
  );
};

export default App;

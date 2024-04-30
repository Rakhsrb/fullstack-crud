import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Add } from "./pages/Add";
import { Edit } from "./pages/Edit";
import { Detail } from "./pages/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="h-[70px] bg-cyan-950">
          <div className="container h-full flex items-center justify-center gap-20 text-white">
            <Link to={"/"}>HOME</Link>
            <Link to={"/add"}>NEW USER +</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

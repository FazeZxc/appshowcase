import React from "react";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Button } from "./components/Button";
import { Info } from "./components/Info";

function App() {
  return <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <Info></Info>
  </div>
}

export default App;
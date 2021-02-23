import React from "react";
import { navigate } from "gatsby";
// import './index.css'
import Lolly from "../components/lolly";
export default function Home() {
  return (
    <div className="mainCon">
      <Lolly topColor="blue" middleColor="red" bottomColor="orange" />
      <br />
      <button onClick={() => navigate("/createLolly/")}> Send Lolly To Friend </button>

    </div>
  );
}
import React from "react";
import "./App.css";
import Billing from "./components/Billing";
import FibonacciChecker from "./components/FibonacciChecker";
import SalesPercentage from "./components/SalesPercentage";
import StringReversal from "./components/StringReversal";
import Sum from "./components/Sum";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="pb-4 text-white">Desafios Target Sistemas</h1>

      <Sum />
      <FibonacciChecker />
      <Billing />
      <SalesPercentage />
      <StringReversal />
    </div>
  );
};

export default App;

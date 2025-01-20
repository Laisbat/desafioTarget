import React, { useState } from "react";

const StringReversal: React.FC = () => {
  const [inputString, setInputString] = useState("");
  const [reversedString, setReversedString] = useState("");

  const reverseString = (s: string) => {
    let result = "";
    for (const char of s) {
      result = char + result;
    }
    return result;
  };

  const handleReverse = () => {
    setReversedString(reverseString(inputString));
  };

  return (
    <div className="mb-4 p-4 border rounded-lg shadow-md bg-white">
      <h2>5) Escreva um programa que inverta os caracteres de um string.</h2>
      <input
        type="text"
        className="p-2 border rounded-2xl mr-2 bg-slate-300"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        placeholder="Digite uma string"
      />
      <button
        onClick={handleReverse}
        className="p-2 bg-blue-500 text-white rounded-2xl"
      >
        {" "}
        inverter
      </button>
      <p>String Invertida: {reversedString}</p>
    </div>
  );
};

export default StringReversal;

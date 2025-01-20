import React, { useState } from "react";

const FibonacciChecker: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const checkFibonacci = () => {
    const n = parseInt(input);
    let a = 0,
      b = 1;

    while (b < n) {
      const temp = a;
      a = b;
      b = temp + b;
    }

    setResult(
      b === n || n === 0
        ? "Pertence à sequência de Fibonacci ✅"
        : "Não pertence à sequência de Fibonacci ❌"
    );
  };

  return (
    <div className="mb-4 p-4 border rounded-lg shadow-md bg-white">
      <p>
        2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo
        valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2,
        3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar
        onde, informado um número, ele calcule a sequência de Fibonacci e
        retorne uma mensagem avisando se o número informado pertence ou não a
        sequência.
      </p>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite um número"
        className="p-2 border rounded-2xl mr-2 bg-slate-300"
      />
      <button
        onClick={checkFibonacci}
        className="p-2 bg-blue-500 text-white rounded-2xl"
      >
        Verificar
      </button>
      <p className="mt-2">{result}</p>
    </div>
  );
};

export default FibonacciChecker;

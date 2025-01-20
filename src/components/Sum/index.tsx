import React, { useEffect, useState } from "react";

const Sum: React.FC = () => {
  const [soma, setSoma] = useState<number>(0);

  useEffect(() => {
    const calcularSoma = (n: number): number => {
      let somaTotal = 0;
      for (let k = 1; k <= n; k++) {
        somaTotal += k;
      }
      return somaTotal;
    };

    setSoma(calcularSoma(13));
  }, []);

  return (
    <div className="mb-4 p-4 border rounded-lg shadow-md bg-white">
      <p>{`1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);`}</p>
      <p>{`Valor da soma: ${soma}`}</p>
    </div>
  );
};

export default Sum;

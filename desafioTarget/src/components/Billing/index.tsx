import React, { useEffect, useState } from "react";
import { faturamento } from "./faturamento.json";

const Billing: React.FC = () => {
  const [menorValor, setMenorValor] = useState<number | null>(null);
  const [maiorValor, setMaiorValor] = useState<number | null>(null);
  const [diasAcimaMedia, setDiasAcimaMedia] = useState<number>(0);

  useEffect(() => {
    const valores = faturamento
      .map((item) => item.valor)
      .filter((valor) => valor > 0);

    if (valores.length > 0) {
      setMenorValor(Math.min(...valores));
      setMaiorValor(Math.max(...valores));

      const mediaMensal =
        valores.reduce((acc, valor) => acc + valor, 0) / valores.length;
      const diasAcima = valores.filter((valor) => valor > mediaMensal).length;

      setDiasAcimaMedia(diasAcima);
    }
  }, []);

  return (
    <div className="mb-4 p-4 border rounded-lg shadow-md bg-white">
      <h2>3) Faturamento de uma distribuidora:</h2>
      <div>
        <p>
          Menor valor de faturamento em um dia:{" "}
          {menorValor !== null ? menorValor : "Carregando..."}
        </p>
        <p>
          Maior valor de faturamento em um dia:{" "}
          {maiorValor !== null ? maiorValor : "Carregando..."}
        </p>
        <p>
          Número de dias com faturamento superior à média mensal:{" "}
          {diasAcimaMedia}
        </p>
      </div>
    </div>
  );
};

export default Billing;

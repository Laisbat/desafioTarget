import React, { useState } from "react";

const SalesPercentage: React.FC = () => {
  const salesData = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const [salesResults, setSalesResults] = useState<{ [key: string]: string }>(
    {}
  );

  const calculateSalesPercentage = () => {
    const totalRevenue = Object.values(salesData).reduce(
      (sum, curr) => sum + curr,
      0
    );
    const percentages = Object.entries(salesData).reduce(
      (acc, [state, value]) => {
        acc[state] = ((value / totalRevenue) * 100).toFixed(2) + "%";
        return acc;
      },
      {} as { [key: string]: string }
    );

    setSalesResults(percentages);
  };

  return (
    <div className="mb-4 p-4 border rounded-lg shadow-md bg-white">
      <h2>
        4) Dado o valor de faturamento mensal de uma distribuidora, detalhado
        por estado:
      </h2>
      <p>• SP – R$67.836,43</p>
      <p>• RJ – R$36.678,66</p>
      <p>• MG – R$29.229,88</p>
      <p>• ES – R$27.165,48</p>
      <p className="pb-2">• Outros – R$19.849,53</p>
      <button
        onClick={calculateSalesPercentage}
        className="p-2 bg-blue-500 text-white rounded-2xl"
      >
        Calcular Percentuais
      </button>
      <div>
        {Object.entries(salesResults).map(([state, percent]) => (
          <p key={state}>
            {state} - {percent}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SalesPercentage;

import type { HoldingsResponse } from "./api/Dtos/HoldingsResponse";
import { getBrokerData } from "./api/getBrokerData";
import { useEffect, useState } from "react";
import "./Portofolio.css"
import type { HoldingDto } from "./api/Dtos/HoldingDto";
import HoldingRow from "../../components/Portofolio/Holdings/HoldingRow";
import stockLogo from "../../assets/stockLogo/PEP.png"

function Portofolio() {
  const [holdings, setHoldings] = useState<HoldingDto[]>([]);

  useEffect(() => {
    const fetchBrokerData = async () => {
      try {
        const data: HoldingsResponse = await getBrokerData();
        setHoldings(data.holdings);
      } catch (error) {
        console.error("Error fetching broker data:", error);
      }
    };

    fetchBrokerData();
  }, []);

  let sortedHoldings = holdings.sort((a, b) => b.walletImpact.portfolioPercentage - a.walletImpact.portfolioPercentage);

  return (
    <>
      <main className="card">
      <div className="table">
        <div className="row header">
          <div className="col stock">Stock</div>
          <div className="col weight">Weight</div>
          <div className="col pnl">Gain/Loss</div>
        </div>

         {sortedHoldings.map((holding, index) => {
          const currentValue =
            100 -
            sortedHoldings
              .slice(0, index)
              .reduce(
                (sum, h) =>
                  sum + h.walletImpact.portfolioPercentage,
                0
              );

          return (
            <HoldingRow
              key={holding.instrument.ticker}
              stockName={holding.instrument.name}
              stockLogo={stockLogo}
              weight={holding.walletImpact.portfolioPercentage}
              profit={(
                holding.walletImpact.currentValue -
                holding.walletImpact.totalCost
              ).toFixed(2)}
              currentValue={currentValue}
            />
          );
        })}
      </div>
    </main>
    </>
  );
}

export default Portofolio
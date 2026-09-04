type Props = {
  stockName: string;
  stockLogo: string;
  weight: number;
  profit: string;
  currentValue: number;
};

function HoldingRow(props: Props) {
  let weightPercentage: string = props.weight.toFixed(2);
  let barWidth: string = props.currentValue.toFixed(2) + "%";
  let profit: number = parseFloat(props.profit);

  return (
    <>
      <div className="row">
        <div className="col stock">
          <div className="bar" style={{ "--w": barWidth } as React.CSSProperties}></div>
          <div className="stock-inner">
            <img className="stockLogo" src={props.stockLogo} alt={props.stockName} />
            <span className="name">{props.stockName}</span>
          </div>
        </div>
        <div className="col weight">{weightPercentage + "%"}</div>
        
          {
            profit < 0 ? (
              <div className="col pnl down">
                <span className="arrow" style={{ color: '#d12b2b' }}>↓</span>
                {props.profit + " RON"}
              </div>
              
            ) : (
              <div className="col pnl up">
                <span className="arrow" style={{ color: '#1f7a3f' }}>↑</span>
                {props.profit + " RON"}
              </div>
            )
          }
      </div>
    </>
  );
}

export default HoldingRow
import React from "react";
function Team() {
    return ( 
        <div className="container">
      <div className="row p-5 mt-5  border-top">
        <h1 className="text-center text-muted mt-5">People</h1>
      </div>
      <div className="row p-5  text-muted" style={{lineHeight:"1.8", fontSize:"1.1em"}}>
        <div className="col-2"></div>
        <div className="col-4 text-center">
            <img src="media\nithinKamath.jpg" alt="Ceo" style={{borderRadius:"100%",width:"60%"}}></img>
            <h4 className="mt-5">Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
        </div>
        <div className="col-4 ms-3">
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>
                Connect on  
                <a href="https://nithinkamath.me/" style={{textDecoration:"none"}}> HomePage </a>/
                <a href="https://tradingqna.com/u/nithin/summary" style={{textDecoration:"none"}}> TradingQnA </a>/
                <a href="https://x.com/Nithin0dha" style={{textDecoration:"none"}}> Twitter</a>
            </p>

        </div>
      </div>
    </div>
     );
}

export default Team;
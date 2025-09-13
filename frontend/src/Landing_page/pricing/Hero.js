function Hero() {
    return ( 
        <div className="container mt-5">
            <h1 className="fs-2 text-center mb-3">Charges</h1>
            <h5 className="text-muted text-center mb-5">List of all charges and taxes</h5>
            <div className="row"></div>
            <div className="row mt-5 ms-5">
                <div className="col-4 mb-5">
                    <img src="media/pricing-eq.svg" style={{width:"70%"}}></img>
                    <h3 className="ms-3 mt-3 ">Free equity delivery</h3>
                    <p className="text-center text-muted" style={{marginRight:"30%"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                 <div className="col-4 mb-5">
                    <img src="media/other-trades.svg" style={{width:"70%",marginLeft:"10%"}}></img>
                     <h3 className="ms-5 mt-3 ">Intraday and F&O trades</h3>
                     <p className="text-center text-muted" >Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                 <div className="col-4 mb-5">
                    <img src="media/pricing-eq.svg" style={{width:"70%", marginLeft:"20%"}}></img>
                    <h3 className="mt-3 " style={{marginLeft:"30%"}}>Free direct MF</h3>
                    <p className="text-center text-muted" style={{marginLeft:"10%"}} >All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>

            </div>
        </div>
     );
}

export default Hero;
import React from "react";
function Universe() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <h1 className="text-center fs-4">The Zerodha Universe</h1>
                <p className="text-center mb-5">Extend your trading and investment experience even further with our partner platforms</p>
        
                <div className="col-4  mt-5">
                    <a href="https://www.zerodhafundhouse.com/" style={{textDecoration:"none"}}><img src="media/zerodhaFundhouse.png" style={{width:"70%", marginLeft:"10px"}}/>
                    <p className="text-samll text-muted text-center mt-2">Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p></a>
                </div>
                <div className="col-4  mt-5 ms-3">
                    <a href="https://sensibull.com/" style={{textDecoration:"none"}}><img src="media\sensibull-logo.svg" style={{width:"60%",marginLeft:"60px"}} className="mb-2"/>
                    <p className="text-center text-small text-muted mt-4">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </a>
                </div>
                <div className="col-3 mt-5 ms-5">
                    <a href="https://www.tijorifinance.com/ideas-dashboard/" style={{textDecoration:"none"}}><img src="media/tijori.svg" style={{width:"60%", marginLeft:"50px"}}></img>
                    <p className="text-center text-small text-muted mt-1">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p></a>
                </div>
                <div className="col-4 mt-5">
                    <a href="https://www.streak.tech/home" style={{textDecoration:"none"}}><img src="media/streakLogo.png" style={{width:"50%", marginLeft:"60px"}}> 
                    </img><p className="text-center text-small text-muted mt-1">Systematic trading platform that allows you to create and backtest strategies without coding.</p></a>
                </div>
                <div className="col-4 mt-5">
                    <a href="https://smallcase.zerodha.com/" style={{textDecoration:"none"}}><img src="media/smallcaseLogo.png" style={{marginLeft:"90px"}}></img>
                    <p className="text-center text-small text-muted mt-4">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p></a>
                </div>
                <div className="col-3 mt-5 ms-5">
                    <a href="https://joinditto.in/" style={{textDecoration:"none"}}><img src="media\dittoLogo.png"style={{width:"50%", marginLeft:"90px"}}></img><p className="text-center text-small text-muted mt-3 ms-2">Personalized advice on life and health insurance. No spam and no mis-selling.</p></a>
                </div>
            </div>
            <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width:"15%",margin:"0 auto",marginLeft:"42%",marginTop:"40%"}}>Sign up Now</button>
        </div>
     );
}

export default Universe;
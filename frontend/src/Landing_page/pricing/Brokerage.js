function Brokerage() {
    return ( 
        <div>
      {/* Tabs */}
      <div className="container mt-5 p-3">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active fs-5" id="equity-tab" data-bs-toggle="tab" data-bs-target="#equity" type="button" role="tab">Equity</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link fs-5" id="currency-tab" data-bs-toggle="tab" data-bs-target="#currency" type="button" role="tab">Currency</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link fs-5" id="commodity-tab" data-bs-toggle="tab" data-bs-target="#commodity" type="button" role="tab">Commodity</button>
          </li>
        </ul>

        <div className="tab-content mt-3 p-3" id="myTabContent">
          {/* Equity Table */}
          <div className="tab-pane fade show active" id="equity" role="tabpanel">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>Equity delivery</th>
                  <th>Equity intraday</th>
                  <th>F&O - Futures</th>
                  <th>F&O - Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>Zero Brokerage</td>
                  <td>0.03% or Rs. 20/executed order whichever is lower</td>
                  <td>0.03% or Rs. 20/executed order whichever is lower</td>
                  <td>Flat Rs. 20 per executed order</td>
                </tr>
                <tr>
                  <td>STT/CTT</td>
                  <td>0.1% on buy & sell</td>
                  <td>0.025% on the sell side</td>
                  <td>0.02% on the sell side</td>
                  <td>0.125% (exercised) / 0.1% on sell side</td>
                </tr>
                <tr>
                  <td>Transaction charges</td>
                  <td>NSE: 0.00297% / BSE: 0.00375%</td>
                  <td>NSE: 0.00297% / BSE: 0.00375%</td>
                  <td>NSE: 0.00173%</td>
                  <td>NSE: 0.03503% / BSE: 0.0325% (premium)</td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td colSpan="4">18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                <tr>
                  <td>SEBI charges</td>
                  <td colSpan="4">₹10 / crore</td>
                </tr>
                <tr>
                  <td>Stamp charges</td>
                  <td>0.015% or ₹1500 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                  <td>0.002% or ₹200 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Currency Table */}
          <div className="tab-pane fade p-3" id="currency" role="tabpanel">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>Currency futures</th>
                  <th>Currency options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>0.03% or Rs. 20/executed order whichever is lower</td>
                  <td>₹20/executed order</td>
                </tr>
                <tr>
                  <td>STT/CTT</td>
                  <td>No STT</td>
                  <td>No STT</td>
                </tr>
                <tr>
                  <td>Transaction charges</td>
                  <td>NSE: 0.00035% / BSE: 0.00045%</td>
                  <td>NSE: 0.0311% / BSE: 0.001%</td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td colSpan="2">18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                <tr>
                  <td>SEBI charges</td>
                  <td colSpan="2">₹10 / crore</td>
                </tr>
                <tr>
                  <td>Stamp charges</td>
                  <td>0.0001% or ₹10 / crore on buy side</td>
                  <td>0.0001% or ₹10 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Commodity Table */}
          <div className="tab-pane fade p-3" id="commodity" role="tabpanel">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>Commodity futures</th>
                  <th>Commodity options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>0.03% or Rs. 20/executed order whichever is lower</td>
                  <td>₹20/executed order</td>
                </tr>
                <tr>
                  <td>STT/CTT</td>
                  <td>0.01% on sell side (Non-Agri)</td>
                  <td>0.05% on sell side</td>
                </tr>
                <tr>
                  <td>Transaction charges</td>
                  <td>MCX: 0.0021% / NSE: 0.0001%</td>
                  <td>MCX: 0.0418% / NSE: 0.001%</td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td colSpan="2">18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                <tr>
                  <td>SEBI charges</td>
                  <td>Agri: ₹1/crore Non-agri: ₹10/crore</td>
                  <td>₹10/crore</td>
                </tr>
                <tr>
                  <td>Stamp charges</td>
                  <td>0.002% or ₹200 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-center fs-5 text-muted mt-5  mb-5"><a href="https://zerodha.com/brokerage-calculator#tab-equities" style={{textDecoration:"none"}}> Calculate your costs upfront </a> using our brokerage calculator</p>
        <div className=" mt-5 mb-5 p-4">
          <h4 className="mt-5">Charges for account opening</h4>
          <table className="table mt-4 table-bordered mb-5">
            <thead>
                <tr>
                  <th className="text-muted">Types of account</th>
                  <th className="text-muted">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-muted">Online account</td>
                  <td className="text-muted"><span className="badge bg-success text-white">Free</span></td>
                </tr>
                <tr>
                  <td className="text-muted">Offline Account</td>
                  <td className="text-muted"><span className="badge bg-success text-white">Free</span></td>
                </tr>
                <tr>
                  <td className="text-muted">NRI account(offline only)</td>
                  <td className="text-muted"><i class="fa fa-inr" aria-hidden="true"></i> 500</td>
                </tr>
                <tr>
                  <td className="text-muted">Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                  <td className="text-muted"><i class="fa fa-inr" aria-hidden="true"></i> 500</td>
                </tr>
              </tbody>

          </table>
        </div>
        <div className="mt-5 p-4">
          <h4 className="mt-5">Demat AMC (Annual Maintenance Charge)</h4>
          <table className="table mt-4 table-bordered">
            <thead>
                <tr>
                  <th className="text-muted">Value of Holdings</th>
                  <th className="text-muted">AMC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-muted">Up to <i class="fa fa-inr" aria-hidden="true"></i> 4 lakhs</td>
                  <td className="text-muted"><span className="badge bg-success text-white">Free</span></td>
                </tr>
                <tr>
                  <td className="text-muted">₹4 lakh - ₹10 lakh</td>
                  <td className="text-muted">	₹ 100 per year, charged quarterly*</td>
                </tr>
                <tr>
                  <td className="text-muted">Above ₹10 lakh</td>
                  <td className="text-muted">₹ 300 per year, charged quartlerly</td>
                </tr>
              </tbody>

          </table>
          <p className="text-muted" style={{fontSize:"90%"}}>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA,<a href="https://support.zerodha.com/category/account-opening/resident-individual/ri-online/articles/how-to-open-a-basic-service-demat-account-at-zerodha" style={{textDecoration:"none"}}> click here</a>.</p>
          
        </div>
        <div className="mt-5 p-4">
          <h4 className="mt-5">Charges for optional value added services</h4>
          <table className="table mt-4 table-bordered">
            <thead>
                <tr>
                  <th className="text-muted">Service</th>
                  <th className="text-muted">	Billing Frquency</th>
                  <th className="text-muted">	Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-muted">Tickertape</td>
                  <td className="text-muted">Monthly / Annual</td>
                  <td className="text-muted">	Free: 0 | Pro: 249/2399</td>
                </tr>
                <tr>
                  <td className="text-muted">Smallcase</td>
                  <td className="text-muted">	Per transaction</td>
                  <td className="text-muted">Buy & Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                  <td className="text-muted">Kite Connect</td>
                  <td className="text-muted">Monthly</td>
                  <td className="text-muted">Connect: 500 | Historical: 500</td>
                </tr>
              </tbody>

          </table>
          <div className="row mt-5 p-2">
            <h3 style={{marginTop:"10%"}}>Charges explained</h3>
            <div className="col-5 ">
              
              <p className="mt-5 ">Securities/Commodities transaction tax</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>Tax by the government when transacting on the exchanges. Charged as above on both buy<br/> and sell sides when trading equity delivery. Charged only on selling side when trading<br/> intraday or on F&O.</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge.<br/> Important to keep a tab.</p>
              <p className="mt-5 ">Transaction/Turnover Charges</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>
                Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
              </p>
              <p className=" text-muted" style={{fontSize:"80%"}}>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore<br/> w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross <br/>turnover.</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-<br/>exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
              <p className="mt-4 ">Call & trade</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
              <p className="mt-4 ">Stamp charges</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
              <p className="mt-3 ">NRI Brokerage Charges</p>
              <ul>
                <li style={{fontSize:"80%"}}className=" text-muted mt-2">₹100 per order for futures and options.</li>
                <li style={{fontSize:"80%"}}className=" text-muted mt-2">For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                <li style={{fontSize:"80%"}}className=" text-muted mt-2">For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li style={{fontSize:"80%"}}className=" text-muted mt-2">₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
              </ul>
              <p className="mt-4 ">Account with debit balance</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
              <p className="mt-4 ">Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
              <ul>
                <li style={{fontSize:"80%"}}className=" text-muted mt-2">Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                <li style={{fontSize:"80%"}}className=" text-muted mt-2">Options - ₹50 per crore + GST traded value (premium value).</li>
                <li style={{fontSize:"80%"}}className=" text-muted mt-2">Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options..</li>
              </ul>
              <p className="mt-4 ">Margin Trading Facility (MTF)</p>
              <ul>
                <li style={{fontSize:"80%"}}className=" text-muted mt-2">MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                <li style={{fontSize:"80%"}}className=" text-muted mt-2">MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                <li style={{fontSize:"80%"}}className=" text-muted mt-2">MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
              </ul>
            </div>
            <div className="col-1"></div>
            <div className="col-5 mt-5">
              <p>GST</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
              <p style={{marginTop:"5%"}}>SEBI Charges</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
              <p style={{marginTop:"5%"}}>DP (Depository participant) charges</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>
                ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.
              </p>
              <p className=" text-muted" style={{fontSize:"80%"}}>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
              <p style={{marginTop:"5%"}}>Pledging charges</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>₹30 + GST per pledge request per ISIN.</p>
              <p style={{marginTop:"5%"}}>AMC (Account maintenance charges)</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="https://support.zerodha.com/category/account-opening/resident-individual/ri-online/articles/how-to-open-a-basic-service-demat-account-at-zerodha" style={{textDecoration:"none"}}>Click here</a></p>
              <p className=" text-muted" style={{fontSize:"80%"}}>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="https://support.zerodha.com/category/account-opening/resident-individual/ri-charges/articles/what-is-the-annual-maintenance-charge" style={{textDecoration:'none'}}>Click here</a></p>
              <p style={{marginTop:"5%"}}>Corporate action order charges</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
              <p style={{marginTop:"5%"}}>Off-market transfer charges</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>₹25 per transaction.</p>
              <p style={{marginTop:"5%"}}>Physical CMR request</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
              <p style={{marginTop:"5%"}}>Payment gateway charges</p>
              <p className=" text-muted" style={{fontSize:"80%"}}>₹9 + GST (Not levied on transfers done via UPI)</p>
              <p style={{marginTop:"5%"}}>Delayed Payment Charges</p>
              <p className="text-muted" style={{fontSize:'80%'}}>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href="https://support.zerodha.com/category/console/ledger/articles/interest-charges" style={{textDecoration:'none'}}>Learn more</a>.</p>
              <p style={{marginTop:"5%"}}>Trading using 3-in-1 account with block functionality</p>
               <ul>
                <li style={{fontSize:"80%"}}className=" text-muted mt-2">Delivery & MTF Brokerage: 0.5% per executed order.</li>
                <li style={{fontSize:"80%"}}className=" text-muted mt-2">Intraday Brokerage: 0.05% per executed order.</li>
              </ul>

            </div>
            <h5 className="mt-5">Disclaimer</h5>
            <p className=" text-muted mb-5" style={{fontSize:"80%"}}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
          </div>
          
        </div>
      </div>
    </div>
     );
}

export default Brokerage;
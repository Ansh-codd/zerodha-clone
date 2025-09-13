import React, { useState } from  "react";
function Footer() {
  return (
    <div className="container-fluid  bg-light border-top mt-5">
      <div className="row mt-5">
        <div className="col" style={{ marginRight: '100px',marginLeft:'100px' }}>
          <img src="media/logo.svg" style={{ width: "50%" }} />
          <p className="text-muted" style={{ fontSize: "80%" }}>
            © 2010 - 2025, Zerodha Broking Ltd.
            <br />
            All rights reserved.
          </p>
          <div>
            <a href="https://x.com/zerodhaonline"style={{ color: "grey" }}
    onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")}
    onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}><i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a>
          <a href="https://www.facebook.com/zerodha.social" className="ms-3" style={{ color: "grey" }}
    onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")}
    onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/zerodhaonline/" className="ms-3" style={{ color: "grey" }}
    onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")}
    onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/company/zerodha" className="ms-3" style={{ color: "grey" }}
    onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")}
    onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
          </div>
          <div className="border-top mt-3">
            <a href="https://www.youtube.com/@zerodhaonline"target="_blank"rel="noopener noreferrer" style={{ color: "grey"}}onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")}onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}><i class="fa fa-youtube-play fa-2x" aria-hidden="true"></i></a>
            <a href="https://www.whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g" target="_blank"rel="noopener noreferrer" className="ms-3"style={{ color: "grey" }}onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")}onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i></a>
            <a href="https://t.me/zerodhain"target="_blank"rel="noopener noreferrer"className="ms-3"style={{ color: "grey" }}onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")}onMouseLeave={(e) => (e.currentTarget.style.color = "grey")} ><i class="fa fa-telegram fa-2x" aria-hidden="true"></i></a>
          </div>
        </div>
       <div className="col">
  <p>Account</p>
  <a href="" className="d-block mb-3 text-muted" style={{ textDecoration: "none" }}>Open demat account</a>
  <a href="" className="d-block mb-3 text-muted" style={{ textDecoration: "none" }}>Minor demat account</a>
  <a href="" className="d-block mb-3 text-muted" style={{ textDecoration: "none" }}>NRI demat account</a>
  <a href="" className="d-block mb-3 text-muted" style={{ textDecoration: "none" }}>Commodity</a>
  <a href="" className="d-block mb-3 text-muted" style={{ textDecoration: "none" }}>Dematerialisation</a>
  <a href="" className="d-block mb-3 text-muted" style={{ textDecoration: "none" }}>Fund transfer</a>
  <a href="" className="d-block mb-3 text-muted" style={{ textDecoration: "none" }}>MTF</a>
  <a href="" className="d-block mb-3 text-muted" style={{ textDecoration: "none" }}>Referral program</a>
</div>

        <div className="col">
          <p>Support</p>
          <a href=""style={{textDecoration:"none"}}className="d-block mb-3 text-muted"> Contact us</a>
          <a href=""style={{textDecoration:"none"}}className="d-block mb-3 text-muted"> Support portal</a> 
          <a href=""style={{textDecoration:"none"}}className="d-block mb-3 text-muted"> How to file a complaint?</a>
          <a href=""style={{textDecoration:"none"}}className="d-block mb-3 text-muted"> Status of your complaints</a>
          <a href=""style={{textDecoration:"none"}}className="d-block mb-3 text-muted"> Bulletin</a>
          <a href="" style={{textDecoration:"none"}}className="d-block mb-3 text-muted"> Circular</a>
          <a href="" style={{textDecoration:"none"}}className="d-block mb-3 text-muted"> Z-Connect blog</a>
          <a href="" style={{textDecoration:"none"}}className="d-block mb-3 text-muted">Downloads</a>
        </div>
        <div className="col">
          <p>Company</p>
          <a href="" style={{textDecoration:"none"}} className="d-block mb-3 text-muted">About</a>
          <a href="" style={{textDecoration:"none"}}className="d-block mb-3 text-muted"> Philosophy</a>
          <a href=""style={{textDecoration:"none"}}className="d-block mb-3 text-muted"> Press & media</a>
          <a href=""style={{textDecoration:"none"}}className="d-block mb-3 text-muted">Careers</a>
          <a href="" style={{textDecoration:"none"}}className="d-block mb-3 text-muted">Zerodha cares (CSR) </a>
          <a href="" style={{textDecoration:"none"}}className="d-block mb-3 text-muted"> Zerodha.tech</a>
          <a href="" style={{textDecoration:"none"}}className="d-block mb-3 text-muted"> Open source</a>
        </div>
        <div className="col mb-5">
          <p>Quick Links</p>
          <a href="" style={{textDecoration:"none"}}className="d-block mb-3 text-muted">Upcoming IPOs</a>
          <a href="" style={{textDecoration:"none"}}className="d-block mb-3 text-muted">Brokerage charges</a>
          <a href="" style={{textDecoration:"none"}}className="d-block mb-3 text-muted">Market holidays</a>
          <a href="" style={{textDecoration:"none"}}className="d-block mb-3 text-muted">Economic Calendars</a>
          <a href="" style={{textDecoration:"none"}}className="d-block mb-3 text-muted">Calculators </a>
          <a href=""style={{textDecoration:"none"}}className="d-block mb-3 text-muted">Markets</a>
          <a href="" style={{textDecoration:"none"}}className="d-block mb-3 text-muted">Sectors</a>
        </div>
      </div>
      <div className="mt-5 text-small text-muted"style={{ marginRight:"100px", marginLeft:"100px" }}>
        <p style={{fontSize:"80%"}}>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          <a href="mailto:complaints@zerodha.com" style={{textDecoration:"none"}}>complaints@zerodha.com</a>,
          for DP related to
          <a href="mailto:dp@zerodha.com"style={{textDecoration:"none"}}>dp@zerodha.com</a>. Please ensure you
          carefully read the Risk Disclosure Document as prescribed by SEBI |
          ICF
        </p>
        <p style={{fontSize:"80%"}}>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <p style={{fontSize:"80%"}}>
            <a href="" style={{textDecoration:"none"}}>Smart Online Dispute Resolution</a> | 
            <a href="" style={{textDecoration:"none"}}>Grievances Redressal Mechanism</a>
        </p>
        <p style={{fontSize:"80%"}}>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
        </p>
        <p style={{fontSize:"80%"}}>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
        </p>
        <p style={{fontSize:"80%"}}>
            India's largest broker based on networth as per NSE. 
            <a href="https://enit.nseindia.com/MemDirWeb/brokerDetailPage_Beta?memID=2516&h_MemType=members&memName=ZERODHA%20BROKING%20LIMITED" style={{textDecoration:"none"}}>NSE broker factsheet</a>
        </p>
        <p style={{fontSize:"80%"}}>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, 
            <a href="" style={{textDecoration:"none"}}>please create a ticket here.</a>
        </p>
        
        
      </div>
    </div>
  );
}

export default Footer;

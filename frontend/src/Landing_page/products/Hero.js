import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5">
        <h1 className="fs-3">Zerodha Products</h1>
        <h3 className="fs-5 mt-3 text-muted">
          Sleek, modern, and intuitive trading platforms.
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a
            href="https://zerodha.com/investments"
            style={{ textDecoration: "none" }}
          >
            investment offering{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
function RightSection({imageurl, productname, productdescription, learnmore}) {
    return ( 
        <div className="container">
            <div className="row p-2 mt-5">
                <div className="col-1"></div>
                <div className="col-4  mt-5">
                    <h1 className="fs-3 text-muted">{productname}</h1>
                    <p className="text-muted">{productdescription}</p>
                    <div>
                    <a href={learnmore} style={{textDecoration:"none"}}>learnMore <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-4 ">
                    <img src={imageurl} alt="Image"/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;
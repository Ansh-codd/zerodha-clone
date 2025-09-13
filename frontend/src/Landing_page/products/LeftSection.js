import React from "react";
function LeftSection({imageURl, productName, productDescription, tryDemo, learnMore, googleplay, appstore}) {

    return ( 
        <div className="container">
            <div className="row p-5">
                <div className="col-4 p-5">
                    <img src={imageURl}/>
                </div>
                <div className="col-3"></div>
                <div className="col-4 p-5 mt-5">
                    <h1 className="fs-3 text-muted">{productName}</h1>
                    <p className="text-muted">{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}} >Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft:"90px",textDecoration:"none"}}>learnMore <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className="mt-3">
                        <a href={googleplay}><img src="media/googlePlayBadge.svg" alt="googleplay"/></a>
                    <a href={appstore} ><img src="media/appStoreBadge.svg" alt="appstore" style={{marginLeft:"40px"}}/></a>
                    </div>
                    
                    

                </div>
            </div>
        </div>
     );
}

export default LeftSection;
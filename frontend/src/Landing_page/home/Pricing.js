import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5'>
            <div className='row align-items-center'>
                <div className='col-5 p-5'>
                    <h1 className='fs-2 mb-3'>Unbeatable Pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-7 mb-5'>
                    <div className='row'>
                        <div className='col-4'>
                            <img src='media/pricing-eq.svg' style={{width:"70%"}}/>
                            <p className='text-muted ' style={{marginLeft:"70px", fontSize:"12px"}}>Free account opening</p>
                        </div>
                        <div className='col-4'>
                            <img src='media\pricing-eq (1).svg' style={{width:"70%"}}/>
                             <p className='text-muted ' style={{marginLeft:"70px", fontSize:"12px"}} >Free equity delivery <br /> and direct mutual funds</p>
                        </div>
                        <div className='col-4'>
                            <img src='media/other-trades.svg' style={{width:"70%"}}/>
                             <p className='text-muted' style={{marginLeft:"70px", fontSize:"12px"}}>₹20 Intraday and <br /> F&amp;O</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Pricing;
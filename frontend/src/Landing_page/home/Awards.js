import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5 mb-5'>
                    <img src='media/largestBroker.svg' alt='Award'/>
                </div>
                <div className='col-6 p-5 mt-5 mb-5'>
                    <h1 style={{fontSize: '36px'}}>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                             <ul>
                        <li>
                           <p>Futures and Options</p>
                        </li>
                         <li>
                           <p>Commodity Derivatives</p>
                        </li>
                         <li>
                           <p>Currency Derivatives</p>
                        </li>

                    </ul>
                        </div>
                        <div className='col-6'>
                             <ul>
                        <li>
                           <p>stocks & IPOs</p>
                        </li>
                         <li>
                           <p>Direct mutual funds</p>
                        </li>
                         <li>
                           <p>Bonds and Govt. securities</p>
                        </li>

                    </ul>
                        </div>
                        </div>
                        <img src='media\pressLogos.png'style={{width:"80%"}} alt='Press'/>

                   
                </div>
            </div>
        </div>
     );
}

export default Awards;
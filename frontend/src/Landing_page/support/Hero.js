import React, { useState } from "react";


function Hero() {
    const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const supportSections = [
    {
      id: 'account-opening',
      title: 'Account Opening',
      icon: 'fa-plus-circle',
      links: [
        'Getting started',
        'Online account opening',
        'Offline account opening', 
        'Company, HUF, and Partnership accounts',
        'NRI account opening',
        'Charges at Zerodha',
        'SEBI penalty for delayed KYC completion',
        'Account opening for non-individual clients'
      ]
    },
    {
      id: 'zerodha-account',
      title: 'Your Zerodha Account',
      icon: 'fa-user-circle',
      links: [
        'Login credentials',
        'Account modification and segment addition',
        'Your Profile',
        'Transfer and conversion of shares',
        'Nomination',
        'Pledging shares and collaterals'
      ]
    },
    {
      id: 'kite',
      title: 'Kite',
      icon: 'fa-smile-o'
    },
    {
      id: 'funds',
      title: 'Funds',
      icon: 'fa-question-circle'
    },
    {
      id: 'console',
      title: 'Console',
      icon: 'fa-question-circle'
    },
    {
      id: 'coin',
      title: 'Coin',
      icon: 'fa-circle-o'
    }
  ];

  return (
    <div className="container-fluid" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: 0 }}>
      {/* Header */}
      <div className="row" style={{ backgroundColor: '#fff', borderBottom: '1px solid #e0e0e0', margin: 0 }}>
        <div className="col-12 d-flex justify-content-between align-items-center" style={{ padding: '20px 40px' }}>
          <h2 style={{ 
            color: '#666', 
            fontWeight: '400', 
            fontSize: '32px', 
            margin: 0,
            fontFamily: 'Arial, sans-serif'
          }}>
            Support Portal
          </h2>
          <button 
            className="btn" 
            style={{ 
              backgroundColor: '#4285f4', 
              color: 'white', 
              padding: '10px 20px',
              borderRadius: '4px',
              border: 'none',
              fontSize: '14px'
            }}
          >
            My tickets
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="row justify-content-center" style={{ margin: '40px 0', padding: '0 20px' }}>
        <div className="col-12 col-md-8 col-lg-6">
          <div className="input-group" style={{ position: 'relative' }}>
            <span 
              className="input-group-text" 
              style={{ 
                backgroundColor: 'white', 
                border: '1px solid #ddd',
                borderRight: 'none',
                padding: '12px 15px'
              }}
            >
              <i className="fa fa-search" style={{ color: '#999' }}></i>
            </span>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Eg: How do I open my account, How do I activate F&O..."
              style={{ 
                border: '1px solid #ddd',
                borderLeft: 'none',
                padding: '12px 15px',
                fontSize: '14px',
                color: '#999'
              }}
            />
          </div>
        </div>
      </div>

      <div className="row" style={{ margin: 0 }}>
        {/* Left Side - Support Categories */}
        <div className="col-12 col-lg-8" style={{ padding: '0 40px' }}>
          <div className="accordion" style={{ backgroundColor: 'transparent' }}>
            {supportSections.map((section) => (
              <div 
                key={section.id}
                className="card" 
                style={{ 
                  border: '1px solid #e0e0e0', 
                  marginBottom: '10px',
                  borderRadius: '8px',
                  backgroundColor: 'white'
                }}
              >
                <div 
                  className="card-header" 
                  style={{ 
                    backgroundColor: 'white', 
                    border: 'none', 
                    padding: '20px 25px',
                    cursor: 'pointer',
                    borderRadius: '8px'
                  }}
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i 
                        className={`fa ${section.icon}`} 
                        style={{ 
                          color: '#4285f4', 
                          fontSize: '20px', 
                          marginRight: '15px' 
                        }}
                      ></i>
                      <span style={{ 
                        fontSize: '16px', 
                        fontWeight: '400',
                        color: '#333',
                        fontFamily: 'Arial, sans-serif'
                      }}>
                        {section.title}
                      </span>
                    </div>
                    <i 
                      className={`fa ${expandedSections[section.id] ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                      style={{ color: '#666', fontSize: '14px' }}
                    ></i>
                  </div>
                </div>
                {expandedSections[section.id] && (
                  <div className="card-body" style={{ padding: '0 25px 20px 60px' }}>
                    {section.links ? (
                      <div>
                        {section.links.map((link, index) => (
                          <div key={index} style={{ marginBottom: '12px' }}>
                            <a 
                              href="#" 
                              style={{ 
                                color: '#4285f4', 
                                textDecoration: 'none',
                                fontSize: '14px',
                                display: 'block',
                                lineHeight: '1.4'
                              }}
                              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                            >
                              {link}
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                        Content for {section.title} would go here...
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Announcements and Quick Links */}
        <div className="col-12 col-lg-4" style={{ padding: '0 40px' }}>
          {/* Announcements */}
          <div 
            className="card" 
            style={{ 
              border: 'none',
              borderRadius: '8px',
              backgroundColor: 'white',
              marginBottom: '30px'
            }}
          >
            <div className="card-body" style={{ padding: '20px' }}>
              <div style={{ 
                borderLeft: '4px solid #ff9800', 
                paddingLeft: '15px',
                marginBottom: '20px'
              }}>
                <div style={{ marginBottom: '15px' }}>
                  <a 
                    href="#" 
                    style={{ 
                      color: '#4285f4', 
                      textDecoration: 'none',
                      fontSize: '14px',
                      display: 'block',
                      marginBottom: '5px'
                    }}
                  >
                    Exclusion of F&O contracts on 8 securities from August 29, 2025
                  </a>
                </div>
                <div>
                  <a 
                    href="#" 
                    style={{ 
                      color: '#4285f4', 
                      textDecoration: 'none',
                      fontSize: '14px',
                      display: 'block'
                    }}
                  >
                    Revision in expiry day of Index and Stock derivatives contracts
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div 
            className="card" 
            style={{ 
              border: 'none',
              borderRadius: '8px',
              backgroundColor: 'white'
            }}
          >
            <div className="card-body" style={{ padding: '20px' }}>
              <h6 style={{ 
                fontSize: '16px', 
                fontWeight: '500', 
                marginBottom: '20px',
                color: '#333'
              }}>
                Quick links
              </h6>
              <div>
                <div style={{ marginBottom: '12px' }}>
                  <span style={{ color: '#4285f4', marginRight: '8px' }}>1.</span>
                  <a 
                    href="#" 
                    style={{ 
                      color: '#4285f4', 
                      textDecoration: 'none',
                      fontSize: '14px'
                    }}
                  >
                    Track account opening
                  </a>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <span style={{ color: '#4285f4', marginRight: '8px' }}>2.</span>
                  <a 
                    href="#" 
                    style={{ 
                      color: '#4285f4', 
                      textDecoration: 'none',
                      fontSize: '14px'
                    }}
                  >
                    Track segment activation
                  </a>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <span style={{ color: '#4285f4', marginRight: '8px' }}>3.</span>
                  <a 
                    href="#" 
                    style={{ 
                      color: '#4285f4', 
                      textDecoration: 'none',
                      fontSize: '14px'
                    }}
                  >
                    Intraday margins
                  </a>
                </div>
                <div>
                  <span style={{ color: '#4285f4', marginRight: '8px' }}>4.</span>
                  <a 
                    href="#" 
                    style={{ 
                      color: '#4285f4', 
                      textDecoration: 'none',
                      fontSize: '14px'
                    }}
                  >
                    Kite user manual
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

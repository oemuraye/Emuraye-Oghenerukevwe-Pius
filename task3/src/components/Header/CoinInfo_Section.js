import React from 'react';

import coinImg from '../../utils/images/btc_usdt-img.png';

const CoinInfo_Section = () => {
  return (
    <section className="coin-info_section d-flex_h">
            <div className="d-flex_h">
                <img src={coinImg} alt="coin-img" />
                <h3>BTC/USDT</h3>
                <i className="fa fa-angle-down" aria-hidden="true"></i>
                <span className="coin-price">$20.634</span>
            </div>

            <ul className="price-info d-flex_h">
                <li>
                    <div className="prices d-flex_v">
                        <span>
                            <i className="fa-regular fa-clock"></i>
                            24h change
                        </span>
                        <span className="price-percentage increase-color">540.80 +1.25%</span>
                    </div>
                </li>
                <li>
                    <div className="prices d-flex_v">
                        <span>
                            <i className="fa fa-arrow-up" aria-hidden="true"></i>
                            24h change
                        </span>
                        <span className="price-percentage">540.80 +1.25%</span>
                    </div>
                </li>
                <li>
                    <div className="prices d-flex_v">
                        <span>
                            <i className="fa fa-arrow-down" aria-hidden="true"></i>
                            24h change
                        </span>
                        <span className="price-percentage">540.80 +1.25%</span>
                    </div>
                </li>
                <li>
                    <div className="prices d-flex_v">
                        <span>
                            <i className="fa-regular fa-chart-bar"></i>
                            24h change
                        </span>
                        <span className="price-percentage">540.80 +1.25%</span>
                    </div>
                </li>
            </ul>
        </section>
  )
}

export default CoinInfo_Section
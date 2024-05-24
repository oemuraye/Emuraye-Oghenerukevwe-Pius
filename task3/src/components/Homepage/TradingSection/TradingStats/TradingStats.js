import React from 'react';

import filterIcon1 from '../../../../utils/images/filter1.png';
import filterIcon2 from '../../../../utils/images/filter2.png';
import filterIcon3 from '../../../../utils/images/filter3.png';


const TradingStats = () => {
  return (
    <section className="trading-stats">
                <div className="trading-stats_tab">
                    <div data-tab="order-tab" className="trading-stats_tab1 active"><h6>Order Book</h6></div>
                    <div data-tab="trade-tab" className="trading-stats_tab2"><h6>Recent trades</h6></div>
                </div>
                <div id="order-tab" className="trading_tab-content active">
                    <section className="order-tab_filter d-flex_h__between">
                        <div className="success-filter d-flex_h">
                            <img className="active" src={filterIcon1} alt="filter-icon" />
                            <img src={filterIcon2} alt="filter-icon" />
                            <img src={filterIcon3} alt="filter-icon" />
                        </div>
                        <div className="num-filter d-flex_h">
                            <h5>10</h5>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </div>
                    </section>

                    <section className="order-records_table">
                        <div className="order-records__title d-flex_h">
                            <div>
                                <h6>Price</h6>
                                <span>(USDT)</span>
                            </div>
                            <div>
                                <h6>Amounts</h6>
                                <span>(BTC)</span>
                            </div>
                            <div>
                                <h6>Total</h6>
                            </div>
                        </div>

                        <section className="order-records_details downward_decrease d-flex_v">
                            <div className="d-flex_h">
                                <div>
                                    <h6 className="records__row1">36920.12</h6>
                                </div>
                                <div>
                                    <h6 className="records__row2">0.758965</h6>
                                </div>
                                <div>
                                    <h6 className="records__row3">28,020.98</h6>
                                </div>
                                <div className="progress_red progress_width-50"></div>
                            </div>
                            <div className="d-flex_h">
                                <div>
                                    <h6 className="records__row1">36920.12</h6>
                                </div>
                                <div>
                                    <h6 className="records__row2">0.758965</h6>
                                </div>
                                <div>
                                    <h6 className="records__row3">28,020.98</h6>
                                </div>
                                <div className="progress_red progress_width-1"></div>
                            </div>
                            <div className="d-flex_h">
                                <div>
                                    <h6 className="records__row1">36920.12</h6>
                                </div>
                                <div>
                                    <h6 className="records__row2">0.758965</h6>
                                </div>
                                <div>
                                    <h6 className="records__row3">28,020.98</h6>
                                </div>
                                <div className="progress_red progress_width-50"></div>
                            </div>
                            <div className="d-flex_h">
                                <div>
                                    <h6 className="records__row1">36920.12</h6>
                                </div>
                                <div>
                                    <h6 className="records__row2">0.758965</h6>
                                </div>
                                <div>
                                    <h6 className="records__row3">28,020.98</h6>
                                </div>
                                <div className="progress_red progress_width-1"></div>
                            </div>
                            <div className="d-flex_h">
                                <div>
                                    <h6 className="records__row1">36920.12</h6>
                                </div>
                                <div>
                                    <h6 className="records__row2">0.758965</h6>
                                </div>
                                <div>
                                    <h6 className="records__row3">28,020.98</h6>
                                </div>
                                <div className="progress_red progress_width-100"></div>
                            </div>
                        </section>

                        <section className="order-records_summary d-flex_h">
                            <h4 className="success_increase">36,642.20</h4>
                            <i className="fa fa-arrow-up success_increase" aria-hidden="true"></i>
                            <h4 className="downward_decrease">36,642.20</h4>
                        </section>

                        <section className="order-records_details success_increase d-flex_v">
                            <div className="d-flex_h">
                                <div>
                                    <h6 className="records__row1">36920.12</h6>
                                </div>
                                <div>
                                    <h6 className="records__row2">0.758965</h6>
                                </div>
                                <div>
                                    <h6 className="records__row3">28,020.98</h6>
                                </div>
                                <div className="progress_green progress_width-50"></div>
                            </div>
                            <div className="d-flex_h">
                                <div>
                                    <h6 className="records__row1">36920.12</h6>
                                </div>
                                <div>
                                    <h6 className="records__row2">0.758965</h6>
                                </div>
                                <div>
                                    <h6 className="records__row3">28,020.98</h6>
                                </div>
                                <div className="progress_green progress_width-1"></div>
                            </div>
                            <div className="d-flex_h">
                                <div>
                                    <h6 className="records__row1">36920.12</h6>
                                </div>
                                <div>
                                    <h6 className="records__row2">0.758965</h6>
                                </div>
                                <div>
                                    <h6 className="records__row3">28,020.98</h6>
                                </div>
                                <div className="progress_green progress_width-50"></div>
                            </div>
                            <div className="d-flex_h">
                                <div>
                                    <h6 className="records__row1">36920.12</h6>
                                </div>
                                <div>
                                    <h6 className="records__row2">0.758965</h6>
                                </div>
                                <div>
                                    <h6 className="records__row3">28,020.98</h6>
                                </div>
                                <div className="progress_green progress_width-1"></div>
                            </div>
                            <div className="d-flex_h">
                                <div>
                                    <h6 className="records__row1">36920.12</h6>
                                </div>
                                <div>
                                    <h6 className="records__row2">0.758965</h6>
                                </div>
                                <div>
                                    <h6 className="records__row3">28,020.98</h6>
                                </div>
                                <div className="progress_green progress_width-100"></div>
                            </div>
                        </section>
                    </section>

                </div>
                <div id="trade-tab" className="trading_tab-content">
                    <h2>Recent Trades Content</h2>
                    <p>This is the content for the Recent Trades tab.</p>
                </div>
            </section>
  )
}

export default TradingStats
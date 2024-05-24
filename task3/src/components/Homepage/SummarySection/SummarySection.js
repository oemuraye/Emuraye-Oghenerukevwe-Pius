import React from 'react';

import './summarySection.css';

const SummarySection = () => {
  return (
    <section className="summary_section">
        <section className="summary_tab-title">
            <div className="summary_tab">
                <div data-tab="summary_tab1" className="summary_tab1 active"><h6>Open Orders</h6></div>
                <div data-tab="summary_tab2" className="summary_tab2"><h6>Positions</h6></div>
                <div data-tab="summary_tab3" className="summary_tab3"><h6>Order History</h6></div>
                <div data-tab="summary_tab4" className="summary_tab4"><h6>Trade History</h6></div>
            </div>
        </section>

        <section id="summary_tab1" className="summary_tab-content">
            <div class="open-orders_section">
                <section class="no-open_orders">
                    <div class="">
                        <h4>No Open Orders</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto esse, officia nemo quam qui itaque quasi ea iste aliquid?</p>              
                    </div>
                </section>
            </div>
        </section>
        <section id="summary_tab2" className="summary_tab-content">
            <h2>Positions Content</h2>
        </section>
        <section id="summary_tab3" className="summary_tab-content">
            <h2>Order History Content</h2>
        </section>
        <section id="summary_tab4" className="summary_tab-content">
            <h2>Trade History Content</h2>
        </section>
    </section>
  )
}

export default SummarySection
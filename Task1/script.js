const menuBtn = document.querySelector('.menu-toggle_btn');
const menuList = document.querySelector('.header-menu_links');

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

// Toggle menu
menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('show');
})


// tab switching
const switchTab = (event) => {
    const targetTab = event.target.getAttribute('data-tab');

    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    event.target.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
}

tabs.forEach(tab => {
    tab.addEventListener('click', switchTab);
});

// Initialize the first tab as active
tabs[0].classList.add('active');
tabContents[0].classList.add('active');



// A reusable function for tab switching
const initializeTabs = (tabSelector, contentSelector) => {
    const tabs = document.querySelectorAll(tabSelector + ' [data-tab]');
    const tabContents = document.querySelectorAll(contentSelector);
    
    const switchTab = (event) => {
        const targetTab = event.target.closest('[data-tab]').getAttribute('data-tab');
        
        if (!targetTab) {
            console.error("No data-tab attribute found on the clicked element");
            return;
        }

        const targetContent = document.getElementById(targetTab);

        if (!targetContent) {
            console.error(`No content element found with id: ${targetTab}`);
            return;
        }

        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        event.target.closest('[data-tab]').classList.add('active');
        targetContent.classList.add('active');
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', switchTab);
    });

    // Initialize the first tab as active
    if (tabs.length > 0 && tabContents.length > 0) {
        tabs[0].classList.add('active');
        tabContents[0].classList.add('active');
    }
};

initializeTabs('.trading-stats_tab', '.trading_tab-content');
initializeTabs(".summary_tab", ".summary_tab-content")



// Task 2 - handle search input
const handleSearch = () => {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const tradingPairs = document.querySelectorAll('.trading-pairs-list li');

    tradingPairs.forEach(pair => {
        const pairText = pair.textContent.toLowerCase();
        if (pairText.includes(searchValue)) {
            pair.style.display = '';
        } else {
            pair.style.display = 'none';
        }
    });
}


// Function to update total value
function updateTotal() {
    var priceInput = document.getElementById('limit-price').value.trim();
    var amountInput = document.getElementById('amount').value.trim();
    
    var price = parseFloat(priceInput);
    var amount = parseFloat(amountInput);
    
    if (!isNaN(price) && !isNaN(amount)) {
        var totalValue = price * amount;
        
        document.getElementById('total-value').innerText = totalValue.toFixed(2);
        document.getElementById('total-value2').innerText = totalValue.toFixed(2);
    } else {
        document.getElementById('total-value').innerText = '0.00';
        document.getElementById('total-value2').innerText = '0.00';
    }
}

// Add event listeners to input fields
document.getElementById('limit-price').addEventListener('input', updateTotal);
document.getElementById('amount').addEventListener('input', updateTotal);



// allows users to switch between different time intervals for the candlestick 
document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('trading-chart');
    // var ctx = canvas.getContext('2d');

    // Function to update chart based on selected interval
    function updateChart(interval) {
        console.log('Updating chart with interval:', interval);
    }

    // Add click event listener to interval options
    var intervalOptions = document.querySelectorAll('.interval');
    intervalOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            var selectedInterval = this.dataset.interval;

            intervalOptions.forEach(function(opt) {
                opt.classList.remove('active');
            });

            this.classList.add('active');

            updateChart(selectedInterval);
        });
    });
});

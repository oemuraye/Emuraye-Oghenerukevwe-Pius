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



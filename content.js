// Constants for time intervals in seconds
const THIRTY_MINUTES = 1800;  // 30 * 60 seconds
const ONE_HOUR = 3600;      // 60 * 60 seconds

// Function to update all button texts
function updateDropdownButtonText(text) {
    // Update the main filter button at the top (using the exact LinkedIn button structure)
    const mainButton = document.querySelector('button#searchFilter_timePostedRange.artdeco-pill.artdeco-pill--slate.artdeco-pill--choice.artdeco-pill--2');
    if (mainButton) {
        mainButton.textContent = text;
        // Also update the aria-label
        mainButton.setAttribute('aria-label', `Date posted filter. ${text}`);
    }

    // Update any other instances of the time filter button
    const dropdownButtons = document.querySelectorAll('button[data-basic-filter-parameter-name="timePostedRange"]');
    dropdownButtons.forEach(button => {
        if (button !== mainButton) {  // Don't update the main button twice
            button.textContent = text;
        }
    });
}

// Function to hide duplicate time filters
function hideDuplicateFilters() {
    const timeFilterList = document.querySelector('ul.search-reusables__collection-values-container');
    if (!timeFilterList) return;

    const allOptions = timeFilterList.querySelectorAll('li');
    const seen = new Set();

    allOptions.forEach(option => {
        const label = option.querySelector('label');
        if (label) {
            const text = label.textContent.trim();
            if (seen.has(text)) {
                option.style.display = 'none';
            } else {
                seen.add(text);
                option.style.display = '';
            }
        }
    });
}

// Function to check current time filter and update UI
function checkCurrentTimeFilter() {
    const url = new URL(window.location.href);
    const timeParam = url.searchParams.get('f_TPR');
    
    if (timeParam === `r${THIRTY_MINUTES}`) {
        updateDropdownButtonText('Past 30 minutes');
    } else if (timeParam === `r${ONE_HOUR}`) {
        updateDropdownButtonText('Past hour');
    }
}

// Function to add custom time filter options
function addCustomTimeFilters() {
    // Wait for the time filter list to be available
    const observer = new MutationObserver((mutations, obs) => {
        const timeFilterList = document.querySelector('ul.search-reusables__collection-values-container');
        if (!timeFilterList) return;

        // Check if our custom options are already added
        if (timeFilterList.querySelector('[data-custom-time-filter="true"]')) {
            hideDuplicateFilters();
            checkCurrentTimeFilter();
            return;
        }

        // Create new time filter options
        const thirtyMinOption = createTimeOption('Past 30 minutes', THIRTY_MINUTES);
        const oneHourOption = createTimeOption('Past hour', ONE_HOUR);

        // Insert at the beginning of the list
        timeFilterList.insertBefore(oneHourOption, timeFilterList.firstChild);
        timeFilterList.insertBefore(thirtyMinOption, timeFilterList.firstChild);

        // Hide any duplicates that might have been created
        hideDuplicateFilters();
        
        // Check and update current selection
        checkCurrentTimeFilter();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Function to create a time filter option
function createTimeOption(text, seconds) {
    const li = document.createElement('li');
    li.className = 'search-reusables__collection-values-item';
    li.setAttribute('data-custom-time-filter', 'true');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'date-posted-filter-value';
    input.id = `timePostedRange-r${seconds}`;
    input.className = 'search-reusables__select-input';
    input.value = `r${seconds}`;

    // Check if this option should be selected
    const url = new URL(window.location.href);
    const timeParam = url.searchParams.get('f_TPR');
    if (timeParam === `r${seconds}`) {
        input.checked = true;
        updateDropdownButtonText(text);
    }

    const label = document.createElement('label');
    label.className = 'search-reusables__value-label';
    label.htmlFor = `timePostedRange-r${seconds}`;
    label.textContent = text;

    li.appendChild(input);
    li.appendChild(label);

    li.addEventListener('click', () => {
        // Get the current URL
        const url = new URL(window.location.href);
        
        // Update the time parameter
        url.searchParams.set('f_TPR', `r${seconds}`);
        
        // Update button text before navigation
        updateDropdownButtonText(text);

        // Update the selected state
        const allInputs = document.querySelectorAll('input[name="date-posted-filter-value"]');
        allInputs.forEach(inp => inp.checked = false);
        input.checked = true;

        // Navigate to the new URL
        window.location.href = url.toString();
    });

    return li;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        addCustomTimeFilters();
        checkCurrentTimeFilter();
    });
} else {
    addCustomTimeFilters();
    checkCurrentTimeFilter();
}

// Handle dynamic navigation
let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        addCustomTimeFilters();
        checkCurrentTimeFilter();
    }
}).observe(document, {
    subtree: true,
    childList: true
}); 
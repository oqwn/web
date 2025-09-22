// Main Application Logic

// Global variables
let viewHistory = ['language-view'];
let selectedLanguage = 'English';
let map = null;
let mapInitialized = false;
let mapMarkers = [];

// Disposal information with icons and colors
const disposalInfo = {
    plastic: {
        icon: '♻️',
        color: 'blue'
    },
    paper: {
        icon: '📄',
        color: 'green'
    },
    glass: {
        icon: '🍾',
        color: 'purple'
    },
    metal: {
        icon: '🥫',
        color: 'gray'
    },
    organic: {
        icon: '🍎',
        color: 'yellow'
    },
    electronics: {
        icon: '💻',
        color: 'red'
    }
};

// Helper function to get translated text
function t(key) {
    return translations[selectedLanguage]?.[key] || translations['English'][key];
}

// Function to update all UI text based on selected language
function updateUILanguage() {
    // Update page title
    document.title = `${t('menu')} - Waste Disposal App`;

    // Update language selection title
    const langTitle = document.querySelector('#language-view h1');
    if (langTitle) {
        langTitle.innerHTML = t('selectLanguage');
    }
    const langSubtitle = document.querySelector('#language-view p');
    if (langSubtitle) {
        langSubtitle.textContent = t('selectLanguageSubtitle');
    }

    // Update menu buttons
    const menuButtons = document.querySelectorAll('#menu-view button[onclick*="showView"]');
    if (menuButtons[0]) {
        menuButtons[0].querySelector('h2').textContent = t('nearbyBins');
        menuButtons[0].querySelector('p').textContent = t('nearbyBinsDesc');
    }
    if (menuButtons[1]) {
        menuButtons[1].querySelector('h2').textContent = t('tutorialVideos');
        menuButtons[1].querySelector('p').textContent = t('tutorialVideosDesc');
    }
    if (menuButtons[2]) {
        menuButtons[2].querySelector('h2').textContent = t('chooseProduct');
        menuButtons[2].querySelector('p').textContent = t('chooseProductDesc');
    }

    // Update titles
    document.getElementById('menu-title').textContent = t('menu');
    const mapTitle = document.getElementById('map-title-text');
    if (mapTitle) mapTitle.textContent = t('nearbyBinsMap');
    const videosTitle = document.querySelector('#videos-view h1');
    if (videosTitle) videosTitle.textContent = t('tutorialVideos');
    const videoPlayerTitle = document.querySelector('#video-player-view h1');
    if (videoPlayerTitle) videoPlayerTitle.textContent = t('playingVideo');
    const videoPlayerText = document.querySelector('#video-player-view .text-gray-300');
    if (videoPlayerText) videoPlayerText.textContent = t('clickToPlay');
    const productMapTitle = document.querySelector('#product-map-view h1');
    if (productMapTitle) productMapTitle.textContent = t('disposalGuide');

    // Update disposal section texts
    const scanQR = document.getElementById('scan-qr-text');
    if (scanQR) scanQR.textContent = t('scanQR');
    const catTitle = document.getElementById('categories-title');
    if (catTitle) catTitle.textContent = t('categoriesTitle');
    const catPlastic = document.getElementById('cat-plastic');
    if (catPlastic) catPlastic.textContent = t('plastic');
    const catPaper = document.getElementById('cat-paper');
    if (catPaper) catPaper.textContent = t('paper');
    const catGlass = document.getElementById('cat-glass');
    if (catGlass) catGlass.textContent = t('glass');
    const catMetal = document.getElementById('cat-metal');
    if (catMetal) catMetal.textContent = t('metal');
    const catOrganic = document.getElementById('cat-organic');
    if (catOrganic) catOrganic.textContent = t('organic');
    const catElectronics = document.getElementById('cat-electronics');
    if (catElectronics) catElectronics.textContent = t('electronics');

    // Update info texts
    document.getElementById('map-lang-info').textContent = t('mapInfo');
    document.getElementById('video-lang-info').textContent = t('videoInfo');
    document.getElementById('product-lang-info').textContent = t('disposalMapInfo');

    // Update video titles
    const videoButtons = document.querySelectorAll('#videos-view button[onclick*="video-player"] span');
    if (t('videoTitles')) {
        t('videoTitles').forEach((title, index) => {
            if (videoButtons[index]) {
                videoButtons[index].textContent = title;
            }
        });
    }

    // Update scroll more text
    const scrollText = document.querySelector('#language-view .text-gray-500');
    if (scrollText) scrollText.textContent = t('scrollMore');

    // Update map markers if map is initialized
    if (map && mapInitialized) {
        updateMapMarkers();
    }
}

// Function to hide all views
function hideAllViews() {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('visible');
        view.classList.add('hidden');
    });
}

// Function to show a specific view
function showView(viewId) {
    hideAllViews();
    const viewElement = document.getElementById(viewId);
    if (viewElement) {
        viewElement.classList.remove('hidden');
        viewElement.classList.add('visible');
        viewElement.classList.add('animate-fade-in');

        // Add the new view to history
        if (viewHistory[viewHistory.length - 1] !== viewId) {
            viewHistory.push(viewId);
        }

        // Initialize map if it's the map view
        if (viewId === 'map-view' && !mapInitialized) {
            initMap();
        }

        // Save current state to localStorage
        saveState();
    }
}

// Function to initialize the map
function initMap() {
    // Show loading spinner
    document.getElementById('map-loading').style.display = 'flex';
    document.getElementById('map').style.display = 'none';

    setTimeout(() => {
        mapInitialized = true;
        // Coordinates for Melbourne, Australia
        const melbourneCoords = [-37.8136, 144.9631];
        map = L.map('map', {
            zoomControl: true,
            attributionControl: true
        }).setView(melbourneCoords, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map);

        // Position zoom control to top left to avoid close button
        map.zoomControl.setPosition('topleft');

        // Add markers with translated names
        updateMapMarkers();

        // Hide loading spinner and show map
        document.getElementById('map-loading').style.display = 'none';
        document.getElementById('map').style.display = 'block';

        // This helps the map render correctly in container
        setTimeout(() => {
            map.invalidateSize();
            map.setView(melbourneCoords, 13);
        }, 200);
    }, 500);
}

// Function to update map markers with translated names
function updateMapMarkers() {
    // Clear existing markers
    mapMarkers.forEach(marker => map.removeLayer(marker));
    mapMarkers = [];

    // Bin locations
    const bins = [
        { lat: -37.8136, lng: 144.9631, index: 0 },
        { lat: -37.8183, lng: 144.9671, index: 1 },
        { lat: -37.8100, lng: 144.9644, index: 2 },
        { lat: -37.8225, lng: 144.9689, index: 3 }
    ];

    bins.forEach(bin => {
        const marker = L.marker([bin.lat, bin.lng])
            .addTo(map)
            .bindPopup(t('bins')[bin.index]);
        mapMarkers.push(marker);
    });
}

// Function to handle language selection
function selectLanguage(language) {
    selectedLanguage = language;
    localStorage.setItem('selectedLanguage', language);
    console.log("Language selected:", language);
    updateUILanguage();
    updateLanguageIndicator();
    showView('menu-view');
}

// Function to update language indicator
function updateLanguageIndicator() {
    const indicator = document.getElementById('lang-indicator');
    const langText = document.getElementById('current-lang');
    if (selectedLanguage !== 'English') {
        indicator.classList.add('show');
        langText.textContent = selectedLanguage;
    } else {
        indicator.classList.remove('show');
    }
}

// Function to save state to localStorage
function saveState() {
    localStorage.setItem('selectedLanguage', selectedLanguage);
    localStorage.setItem('currentView', viewHistory[viewHistory.length - 1]);
}

// Function to load state from localStorage
function loadState() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const savedView = localStorage.getItem('currentView');

    if (savedLanguage) {
        selectedLanguage = savedLanguage;
        updateUILanguage();
        updateLanguageIndicator();
    }

    if (savedView && savedView !== 'language-view') {
        showView(savedView);
    }
}

// Function to go back to the previous view
function goBack(defaultView) {
    // Remove the current view from history
    if (viewHistory.length > 1) {
        viewHistory.pop();
        const previousViewId = viewHistory[viewHistory.length-1];
        showView(previousViewId);
    } else {
        showView(defaultView);
    }
}

// Function to show QR scanner (mock)
function showQRScanner() {
    alert(t('scanQR') + ' - ' + 'Camera functionality would be implemented here');
}

// Function to show disposal instructions
function showDisposalInstructions(category) {
    const info = disposalInfo[category];
    const content = document.getElementById('disposal-content');
    const steps = t('disposalSteps')[category];

    content.innerHTML = `
        <div class="text-center mb-6 animate-slide-up">
            <div class="text-6xl mb-4">${info.icon}</div>
            <h2 class="text-2xl font-bold text-${info.color}-600">${t(category)}</h2>
        </div>
        <div class="bg-${info.color}-50 rounded-lg p-4">
            <h3 class="font-semibold mb-3">${t('disposalInstructions')}:</h3>
            <ol class="space-y-2">
                ${steps.map((step, i) => `
                    <li class="flex items-start">
                        <span class="font-bold text-${info.color}-600 mr-2">${i + 1}.</span>
                        <span>${step}</span>
                    </li>
                `).join('')}
            </ol>
        </div>
        <div class="mt-4 p-3 bg-gray-100 rounded-lg">
            <p class="text-sm text-gray-600">
                <strong>${t('tip')}:</strong> ${t('localRegulationsTip')}
            </p>
        </div>
    `;

    document.getElementById('disposal-title').textContent = `${t('disposalInstructions')} - ${t(category)}`;
    showView('disposal-instructions-view');
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Show language selection view first
    showView('language-view');
    // Load any saved state
    loadState();
});

// Export functions for global access
window.selectLanguage = selectLanguage;
window.showView = showView;
window.goBack = goBack;
window.showQRScanner = showQRScanner;
window.showDisposalInstructions = showDisposalInstructions;
// ===================================
// URBANAIR INSIGHT - Professional Dashboard
// 4-Color AQI System | Leaflet Map | Regression Analysis
// ===================================

// ===================================
// CITY DATA
// ===================================

const cityData = {
    delhi: {
        name: "Delhi, India",
        aqi: 385,
        category: "hazardous",
        temp: "30°C",
        humidity: "45%",
        wind: "12 km/h",
        pm25: 112,
        pollutants: {
            pm25: { value: 112, unit: "μg/m³", percent: 75 },
            pm10: { value: 186, unit: "μg/m³", percent: 70 },
            o3: { value: 45, unit: "ppb", percent: 65 },
            no2: { value: 38, unit: "ppb", percent: 55 },
            so2: { value: 10, unit: "ppb", percent: 25 },
            co: { value: 5, unit: "ppm", percent: 45 }
        },
        healthAdvice: "Emergency conditions. Everyone must stay indoors. Wear N95 mask if outside. Avoid all outdoor exertion.",
        trend: [320, 340, 360, 375, 390, 385, 380, 390, 395, 385, 380, 390, 385, 390, 395, 385, 380, 390, 385, 390, 385, 380, 385, 390, 385, 380, 385, 390, 385, 385]
    },
    mumbai: {
        name: "Mumbai, India",
        aqi: 288,
        category: "hazardous",
        temp: "32°C",
        humidity: "68%",
        wind: "18 km/h",
        pm25: 95,
        pollutants: {
            pm25: { value: 95, unit: "μg/m³", percent: 68 },
            pm10: { value: 142, unit: "μg/m³", percent: 65 },
            o3: { value: 38, unit: "ppb", percent: 55 },
            no2: { value: 32, unit: "ppb", percent: 48 },
            so2: { value: 8, unit: "ppb", percent: 22 },
            co: { value: 4, unit: "ppm", percent: 38 }
        },
        healthAdvice: "Health alert: everyone may experience serious health effects. Avoid prolonged outdoor exertion. Wear N95 mask.",
        trend: [245, 255, 260, 268, 275, 280, 285, 288, 290, 285, 280, 285, 288, 290, 285, 280, 285, 288, 285, 288, 290, 285, 280, 285, 288, 285, 288, 290, 288, 288]
    },
    bangalore: {
        name: "Bengaluru, India",
        aqi: 205,
        category: "hazardous",
        temp: "28°C",
        humidity: "52%",
        wind: "15 km/h",
        pm25: 72,
        pollutants: {
            pm25: { value: 72, unit: "μg/m³", percent: 58 },
            pm10: { value: 118, unit: "μg/m³", percent: 55 },
            o3: { value: 32, unit: "ppb", percent: 48 },
            no2: { value: 28, unit: "ppb", percent: 42 },
            so2: { value: 6, unit: "ppb", percent: 18 },
            co: { value: 3, unit: "ppm", percent: 32 }
        },
        healthAdvice: "Everyone may experience health effects. Sensitive groups at higher risk. Limit outdoor activities.",
        trend: [180, 185, 190, 195, 200, 205, 210, 205, 200, 205, 210, 205, 200, 205, 210, 205, 200, 205, 210, 205, 200, 205, 210, 205, 200, 205, 210, 205, 200, 205]
    },
    kolkata: {
        name: "Kolkata, India",
        aqi: 210,
        category: "hazardous",
        temp: "31°C",
        humidity: "65%",
        wind: "10 km/h",
        pm25: 78,
        pollutants: {
            pm25: { value: 78, unit: "μg/m³", percent: 60 },
            pm10: { value: 125, unit: "μg/m³", percent: 58 },
            o3: { value: 35, unit: "ppb", percent: 50 },
            no2: { value: 30, unit: "ppb", percent: 45 },
            so2: { value: 7, unit: "ppb", percent: 20 },
            co: { value: 3.5, unit: "ppm", percent: 35 }
        },
        healthAdvice: "Everyone may experience health effects. Sensitive groups at higher risk.",
        trend: [195, 200, 205, 210, 215, 210, 205, 210, 215, 210, 205, 210, 215, 210, 205, 210, 215, 210, 205, 210, 215, 210, 205, 210, 215, 210, 205, 210, 215, 210]
    },
    chennai: {
        name: "Chennai, India",
        aqi: 143,
        category: "unhealthy",
        temp: "33°C",
        humidity: "72%",
        wind: "22 km/h",
        pm25: 55,
        pollutants: {
            pm25: { value: 55, unit: "μg/m³", percent: 45 },
            pm10: { value: 88, unit: "μg/m³", percent: 42 },
            o3: { value: 28, unit: "ppb", percent: 38 },
            no2: { value: 22, unit: "ppb", percent: 32 },
            so2: { value: 5, unit: "ppb", percent: 15 },
            co: { value: 2, unit: "ppm", percent: 22 }
        },
        healthAdvice: "Unhealthy for all groups. Reduce outdoor activity. Wear mask if exercising outside.",
        trend: [130, 135, 138, 142, 145, 143, 140, 143, 145, 143, 140, 143, 145, 143, 140, 143, 145, 143, 140, 143, 145, 143, 140, 143, 145, 143, 140, 143, 145, 143]
    },
    hyderabad: {
        name: "Hyderabad, India",
        aqi: 178,
        category: "unhealthy",
        temp: "29°C",
        humidity: "55%",
        wind: "14 km/h",
        pm25: 65,
        pollutants: {
            pm25: { value: 65, unit: "μg/m³", percent: 52 },
            pm10: { value: 105, unit: "μg/m³", percent: 50 },
            o3: { value: 30, unit: "ppb", percent: 42 },
            no2: { value: 26, unit: "ppb", percent: 38 },
            so2: { value: 6, unit: "ppb", percent: 17 },
            co: { value: 2.8, unit: "ppm", percent: 28 }
        },
        healthAdvice: "Sensitive groups may experience health effects. Limit prolonged outdoor exertion.",
        trend: [165, 170, 172, 175, 178, 180, 178, 175, 178, 180, 178, 175, 178, 180, 178, 175, 178, 180, 178, 175, 178, 180, 178, 175, 178, 180, 178, 175, 178, 178]
    },
    pune: {
        name: "Pune, India",
        aqi: 165,
        category: "unhealthy",
        temp: "27°C",
        humidity: "48%",
        wind: "16 km/h",
        pm25: 62,
        pollutants: {
            pm25: { value: 62, unit: "μg/m³", percent: 50 },
            pm10: { value: 98, unit: "μg/m³", percent: 48 },
            o3: { value: 29, unit: "ppb", percent: 40 },
            no2: { value: 25, unit: "ppb", percent: 36 },
            so2: { value: 5, unit: "ppb", percent: 16 },
            co: { value: 2.5, unit: "ppm", percent: 26 }
        },
        healthAdvice: "Sensitive groups may experience health effects. Consider reducing outdoor activities.",
        trend: [155, 158, 160, 163, 165, 168, 165, 162, 165, 168, 165, 162, 165, 168, 165, 162, 165, 168, 165, 162, 165, 168, 165, 162, 165, 168, 165, 162, 165, 165]
    },
    ahmedabad: {
        name: "Ahmedabad, India",
        aqi: 192,
        category: "unhealthy",
        temp: "31°C",
        humidity: "42%",
        wind: "11 km/h",
        pm25: 70,
        pollutants: {
            pm25: { value: 70, unit: "μg/m³", percent: 56 },
            pm10: { value: 115, unit: "μg/m³", percent: 54 },
            o3: { value: 33, unit: "ppb", percent: 46 },
            no2: { value: 29, unit: "ppb", percent: 43 },
            so2: { value: 7, unit: "ppb", percent: 19 },
            co: { value: 3, unit: "ppm", percent: 30 }
        },
        healthAdvice: "Everyone may begin to experience health effects. Avoid prolonged outdoor activities.",
        trend: [180, 183, 186, 189, 192, 195, 192, 189, 192, 195, 192, 189, 192, 195, 192, 189, 192, 195, 192, 189, 192, 195, 192, 189, 192, 195, 192, 189, 192, 192]
    },
    jaipur: {
        name: "Jaipur, India",
        aqi: 245,
        category: "hazardous",
        temp: "29°C",
        humidity: "38%",
        wind: "13 km/h",
        pm25: 85,
        pollutants: {
            pm25: { value: 85, unit: "μg/m³", percent: 64 },
            pm10: { value: 138, unit: "μg/m³", percent: 62 },
            o3: { value: 37, unit: "ppb", percent: 52 },
            no2: { value: 33, unit: "ppb", percent: 49 },
            so2: { value: 8, unit: "ppb", percent: 21 },
            co: { value: 4, unit: "ppm", percent: 36 }
        },
        healthAdvice: "Health alert: serious health effects for everyone. Avoid outdoor exertion. Wear N95 mask.",
        trend: [230, 233, 236, 240, 243, 245, 248, 245, 242, 245, 248, 245, 242, 245, 248, 245, 242, 245, 248, 245, 242, 245, 248, 245, 242, 245, 248, 245, 242, 245]
    },
    lucknow: {
        name: "Lucknow, India",
        aqi: 268,
        category: "hazardous",
        temp: "30°C",
        humidity: "47%",
        wind: "9 km/h",
        pm25: 92,
        pollutants: {
            pm25: { value: 92, unit: "μg/m³", percent: 66 },
            pm10: { value: 148, unit: "μg/m³", percent: 64 },
            o3: { value: 39, unit: "ppb", percent: 54 },
            no2: { value: 35, unit: "ppb", percent: 51 },
            so2: { value: 9, unit: "ppb", percent: 23 },
            co: { value: 4.5, unit: "ppm", percent: 40 }
        },
        healthAdvice: "Health alert: serious health effects for everyone. Avoid outdoor exertion. Wear N95 mask.",
        trend: [255, 258, 260, 263, 265, 268, 270, 268, 265, 268, 270, 268, 265, 268, 270, 268, 265, 268, 270, 268, 265, 268, 270, 268, 265, 268, 270, 268, 265, 268]
    }
};

const cityMeta = {
    delhi:     { openaq: "Delhi",     lat: 28.6139, lon: 77.2090 },
    mumbai:    { openaq: "Mumbai",    lat: 19.0760, lon: 72.8777 },
    bangalore: { openaq: "Bengaluru", lat: 12.9716, lon: 77.5946 },
    kolkata:   { openaq: "Kolkata",   lat: 22.5726, lon: 88.3639 },
    chennai:   { openaq: "Chennai",   lat: 13.0827, lon: 80.2707 },
    hyderabad: { openaq: "Hyderabad", lat: 17.3850, lon: 78.4867 },
    pune:      { openaq: "Pune",      lat: 18.5204, lon: 73.8567 },
    ahmedabad: { openaq: "Ahmedabad", lat: 23.0225, lon: 72.5714 },
    jaipur:    { openaq: "Jaipur",    lat: 26.9124, lon: 75.7873 },
    lucknow:   { openaq: "Lucknow",   lat: 26.8467, lon: 80.9462 }
};

const apiConfig = {
    openaqBase: "https://api.openaq.org/v2/latest",
    openMeteoBase: "https://api.open-meteo.com/v1/forecast"
};

// ===================================
// STATE
// ===================================

let currentCity = 'delhi';
let isRespiratoryView = false;
const criticalThreshold = 300;
const warningThreshold = 200;

// Leaflet objects
let leafletMap = null;
let heatLayer = null;
let cityMarkers = {};

// Chart objects
let aqiTrendChart = null;
let pollutantChart = null;
let correlationChart = null;

// Pollutant safe limits
const normalLimits = {
    pm25: 15, pm10: 45, o3: 50, no2: 40, so2: 20, co: 4
};

// Pollutant-specific colors
const pollutantColors = {
    pm25: '#FF6D00',
    pm10: '#C62828',
    o3:   '#FFD600',
    no2:  '#FF6D00',
    so2:  '#00C853',
    co:   '#00C853'
};

// ===================================
// 4-COLOR AQI SYSTEM
// ===================================

function getAQICategory(aqi) {
    if (aqi > 200) return { label: "HAZARDOUS", className: "hazardous", tagClass: "tag-hazardous", color: "#C62828" };
    if (aqi > 100) return { label: "UNHEALTHY", className: "unhealthy", tagClass: "tag-unhealthy", color: "#FF6D00" };
    if (aqi > 50)  return { label: "MODERATE",  className: "moderate",  tagClass: "tag-moderate",  color: "#FFD600" };
    return { label: "SAFE", className: "safe", tagClass: "tag-safe", color: "#00C853" };
}

function getAQIColor(aqi) {
    if (aqi > 200) return '#C62828';
    if (aqi > 100) return '#FF6D00';
    if (aqi > 50)  return '#FFD600';
    return '#00C853';
}

function getHealthAdvice(aqi) {
    if (aqi > 200) {
        return "Emergency conditions. Everyone must stay indoors. Wear N95 mask if outside. Elderly, children, and respiratory patients must avoid all outdoor exposure.";
    }
    if (aqi > 100) {
        return "Unhealthy air quality. Avoid outdoor activity. Wear mask if going outside. Elderly and children should stay indoors.";
    }
    if (aqi > 50) {
        return "Air quality is acceptable. Sensitive individuals should consider reducing prolonged outdoor exertion.";
    }
    return "Air quality is satisfactory. It is safe to engage in outdoor activities.";
}

function getHealthRecommendations(aqi) {
    if (aqi > 200) {
        return [
            { icon: "🚫", text: "Avoid all outdoor activity and physical exertion" },
            { icon: "😷", text: "Wear N95 mask if going outside is unavoidable" },
            { icon: "🏠", text: "Elderly, children, and pregnant women must stay indoors" },
            { icon: "🪟", text: "Keep all windows and doors closed" },
            { icon: "🫁", text: "Use air purifiers if available" },
            { icon: "🏥", text: "Seek medical help for breathing difficulty or chest pain" }
        ];
    }
    if (aqi > 100) {
        return [
            { icon: "⚠", text: "Reduce outdoor activity, especially strenuous exercise" },
            { icon: "😷", text: "Wear mask when outdoors for extended periods" },
            { icon: "👴", text: "Elderly and children should limit time outside" },
            { icon: "🪟", text: "Keep windows closed during peak pollution hours" },
            { icon: "💧", text: "Stay hydrated and monitor for respiratory symptoms" }
        ];
    }
    if (aqi > 50) {
        return [
            { icon: "ℹ", text: "Sensitive groups should limit prolonged outdoor exertion" },
            { icon: "👁", text: "Monitor air quality updates throughout the day" },
            { icon: "🏃", text: "Outdoor exercise is acceptable for healthy individuals" }
        ];
    }
    return [
        { icon: "✓", text: "Air quality is good — safe for all outdoor activities" },
        { icon: "🏃", text: "Ideal conditions for outdoor exercise and recreation" },
        { icon: "🪟", text: "Open windows for natural ventilation" }
    ];
}

function getRiskLevel(aqi) {
    if (aqi > 200) return { label: "CRITICAL", score: 9.2, cases: "High", population: "100%" };
    if (aqi > 100) return { label: "HIGH", score: 6.8, cases: "Elevated", population: "65%" };
    if (aqi > 50)  return { label: "MODERATE", score: 3.5, cases: "Normal", population: "25%" };
    return { label: "LOW", score: 1.2, cases: "Minimal", population: "5%" };
}

function calculateAQIFromPM25(pm25) {
    if (pm25 == null || Number.isNaN(pm25)) return null;
    const breakpoints = [
        { cLow: 0.0, cHigh: 12.0, iLow: 0, iHigh: 50 },
        { cLow: 12.1, cHigh: 35.4, iLow: 51, iHigh: 100 },
        { cLow: 35.5, cHigh: 55.4, iLow: 101, iHigh: 150 },
        { cLow: 55.5, cHigh: 150.4, iLow: 151, iHigh: 200 },
        { cLow: 150.5, cHigh: 250.4, iLow: 201, iHigh: 300 },
        { cLow: 250.5, cHigh: 350.4, iLow: 301, iHigh: 400 },
        { cLow: 350.5, cHigh: 500.4, iLow: 401, iHigh: 500 }
    ];
    const bp = breakpoints.find(range => pm25 >= range.cLow && pm25 <= range.cHigh);
    if (!bp) return Math.round(pm25);
    const aqi = ((bp.iHigh - bp.iLow) / (bp.cHigh - bp.cLow)) * (pm25 - bp.cLow) + bp.iLow;
    return Math.round(aqi);
}

function toPercent(value, limit) {
    if (!value || !limit) return 0;
    return Math.min(100, Math.round((value / (limit * 3)) * 100));
}

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    setupEventListeners();
    initializeLeafletMap();
    initializeCharts();
    updateTime();
    refreshLiveData();
    setInterval(updateTime, 1000);
});

function initializeDashboard() {
    updateCityDisplay(currentCity);
    updateSummaryStats();
    updateNotificationCenter(currentCity);
    updateHealthRecommendations(currentCity);
    Object.keys(cityData).forEach(updateCityListAndMarkers);
}

// ===================================
// EVENT LISTENERS
// ===================================

function setupEventListeners() {
    document.querySelectorAll('.city-item').forEach(item => {
        item.addEventListener('click', function() {
            selectCity(this.dataset.city);
        });
    });

    document.getElementById('citySearch').addEventListener('input', function(e) {
        filterCities(e.target.value);
    });

    document.getElementById('refreshBtn').addEventListener('click', function() {
        this.querySelector('svg').style.animation = 'rotate 1s linear';
        setTimeout(() => {
            this.querySelector('svg').style.animation = '';
        }, 1000);
        refreshLiveData();
    });

    // View toggle
    document.getElementById('viewToggle').addEventListener('change', function() {
        isRespiratoryView = this.checked;
        document.getElementById('labelAqi').classList.toggle('active', !isRespiratoryView);
        document.getElementById('labelRisk').classList.toggle('active', isRespiratoryView);
        updateCityDisplay(currentCity);
        updateSummaryStats();
        updateHealthRecommendations(currentCity);
    });

    document.querySelector('.api-docs-btn').addEventListener('click', function() {
        alert('API Documentation would open here.');
    });

    document.querySelector('.api-key-btn').addEventListener('click', function() {
        alert('API Key generation would start here.');
    });

    document.querySelectorAll('.alert-action-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            const city = cityData[currentCity];
            const target = city ? city.name.split(',')[0] : 'current city';
            const statusEl = document.getElementById('alertStatus');
            if (statusEl) {
                statusEl.textContent = `Dispatching`;
                statusEl.classList.remove('critical', 'warning');
            }
            alert(`Mock action: ${action} notified about AQI in ${target}.`);
            setTimeout(() => updateNotificationCenter(currentCity), 800);
        });
    });
}

// ===================================
// CITY SELECTION & DISPLAY
// ===================================

function selectCity(cityId) {
    currentCity = cityId;

    document.querySelectorAll('.city-item').forEach(item => {
        item.classList.toggle('active', item.dataset.city === cityId);
    });

    // Highlight marker on map
    highlightMapMarker(cityId);

    updateCityDisplay(cityId);
    updateCharts();
    updateNotificationCenter(cityId);
    updateHealthRecommendations(cityId);

    // Pan map to city
    const meta = cityMeta[cityId];
    if (meta && leafletMap) {
        leafletMap.setView([meta.lat, meta.lon], 6, { animate: true });
    }
}

function updateCityDisplay(cityId) {
    const city = cityData[cityId];
    if (!city) return;
    const category = getAQICategory(city.aqi);

    document.getElementById('cityName').textContent = city.name;

    const aqiLarge = document.getElementById('cityAqiLarge');
    const statusLabel = document.getElementById('statusLabel');

    if (isRespiratoryView) {
        const risk = getRiskLevel(city.aqi);
        aqiLarge.textContent = risk.score;
        aqiLarge.className = `city-aqi-large ${category.className}`;
        statusLabel.textContent = `Risk: ${risk.label}`;
    } else {
        aqiLarge.textContent = city.aqi;
        aqiLarge.className = `city-aqi-large ${category.className}`;
        statusLabel.textContent = `AQI · ${category.label}`;
    }
    flashElement(aqiLarge);

    // Weather
    document.getElementById('temp').textContent = city.temp;
    document.getElementById('humidity').textContent = city.humidity;
    document.getElementById('wind').textContent = city.wind;
    document.getElementById('pm25').textContent = city.pm25;

    // Pollutants
    updatePollutant('pm25', city.pollutants.pm25);
    updatePollutant('pm10', city.pollutants.pm10);
    updatePollutant('o3', city.pollutants.o3);
    updatePollutant('no2', city.pollutants.no2);
    updatePollutant('so2', city.pollutants.so2);
    updatePollutant('co', city.pollutants.co);

    // Health advice
    document.getElementById('healthAdvice').textContent = city.healthAdvice;
    const healthTitle = document.getElementById('healthAlertTitle');
    if (healthTitle) {
        healthTitle.textContent = `Health Advisory · ${category.label}`;
    }

    // Health alert border color
    const healthAlert = document.getElementById('healthAlert');
    if (healthAlert) {
        healthAlert.className = `health-alert level-${category.className}`;
    }
}

function updatePollutant(pollutantId, data) {
    const valueEl = document.getElementById(`${pollutantId}Val`);
    const barEl = document.getElementById(`${pollutantId}Bar`);

    if (valueEl && barEl) {
        valueEl.textContent = `${data.value} ${data.unit}`;
        barEl.style.width = `${data.percent}%`;
        barEl.style.background = pollutantColors[pollutantId] || '#777';
    }
}

function updateHealthRecommendations(cityId) {
    const city = cityData[cityId];
    if (!city) return;
    const category = getAQICategory(city.aqi);
    const recommendations = getHealthRecommendations(city.aqi);

    const levelEl = document.getElementById('recommendationLevel');
    if (levelEl) {
        levelEl.innerHTML = `<span class="recommendation-level ${category.className}">${category.label}</span>`;
    }

    const itemsEl = document.getElementById('recommendationItems');
    if (itemsEl) {
        itemsEl.innerHTML = recommendations.map(rec =>
            `<div class="recommendation-item">
                <span class="rec-icon">${rec.icon}</span>
                <span>${rec.text}</span>
            </div>`
        ).join('');
    }
}

function flashElement(element) {
    if (!element) return;
    element.classList.remove('value-flash');
    void element.offsetWidth;
    element.classList.add('value-flash');
}

// ===================================
// CITY LIST & MARKER UPDATES
// ===================================

function updateCityListAndMarkers(cityId) {
    const city = cityData[cityId];
    if (!city) return;
    const category = getAQICategory(city.aqi);

    const listItem = document.querySelector(`.city-item[data-city="${cityId}"]`);
    if (listItem) {
        listItem.dataset.aqi = city.aqi;
        const aqiEl = listItem.querySelector('.city-aqi');
        const tagEl = listItem.querySelector('.city-tag');
        if (aqiEl) {
            aqiEl.textContent = city.aqi;
            aqiEl.className = `city-aqi ${category.className}`;
        }
        if (tagEl) {
            tagEl.textContent = category.label;
            tagEl.className = `city-tag ${category.tagClass}`;
        }
    }

    // Update Leaflet marker
    updateMapMarker(cityId);
}

function updateSummaryStats() {
    const cities = Object.values(cityData);
    if (!cities.length) return;

    const avgAqi = Math.round(cities.reduce((sum, city) => sum + city.aqi, 0) / cities.length);
    const highRisk = cities.filter(city => city.aqi > 200).length;
    const goodAir = cities.filter(city => city.aqi <= 50).length;
    const worstCity = cities.reduce((max, city) => (city.aqi > max.aqi ? city : max), cities[0]);
    const bestCity = cities.reduce((min, city) => (city.aqi < min.aqi ? city : min), cities[0]);

    const avgEl = document.getElementById('avgAqiValue');
    const highRiskEl = document.getElementById('highRiskValue');
    const goodAirEl = document.getElementById('goodAirValue');
    const worstValueEl = document.getElementById('worstCityValue');
    const worstNameEl = document.getElementById('worstCityName');
    const citiesMonitoredEl = document.getElementById('citiesMonitoredValue');

    if (isRespiratoryView) {
        const avgRisk = getRiskLevel(avgAqi);
        if (avgEl) avgEl.textContent = avgRisk.score;
        if (highRiskEl) highRiskEl.textContent = highRisk;
        if (worstValueEl) worstValueEl.textContent = getRiskLevel(worstCity.aqi).score;
    } else {
        if (avgEl) {
            avgEl.textContent = avgAqi;
            avgEl.style.color = getAQIColor(avgAqi);
        }
        if (highRiskEl) highRiskEl.textContent = highRisk;
        if (worstValueEl) {
            worstValueEl.textContent = worstCity.aqi;
            worstValueEl.style.color = getAQIColor(worstCity.aqi);
        }
    }

    if (worstNameEl) worstNameEl.textContent = worstCity.name.split(',')[0];
    if (goodAirEl) goodAirEl.textContent = goodAir;
    if (citiesMonitoredEl) citiesMonitoredEl.textContent = cities.length;

    const mapAvgEl = document.getElementById('mapAvgAqi');
    const mapBestEl = document.getElementById('mapBestCity');
    const mapWorstEl = document.getElementById('mapWorstCity');
    if (mapAvgEl) mapAvgEl.textContent = avgAqi;
    if (mapBestEl) mapBestEl.textContent = bestCity.name.split(',')[0];
    if (mapWorstEl) mapWorstEl.textContent = worstCity.name.split(',')[0];
}

// ===================================
// LEAFLET MAP
// ===================================

function initializeLeafletMap() {
    leafletMap = L.map('leafletMap', {
        center: [22.5, 78.9],
        zoom: 5,
        zoomControl: true,
        attributionControl: true
    });

    // Dark tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 12,
        minZoom: 4
    }).addTo(leafletMap);

    // Add heatmap layer
    updateHeatLayer();

    // Add city markers with tooltips
    Object.keys(cityData).forEach(cityId => {
        createMapMarker(cityId);
    });
}

function updateHeatLayer() {
    if (heatLayer) {
        leafletMap.removeLayer(heatLayer);
    }

    const maxAqi = Math.max(...Object.values(cityData).map(c => c.aqi));
    const heatPoints = Object.keys(cityData).map(cityId => {
        const meta = cityMeta[cityId];
        const city = cityData[cityId];
        // [lat, lng, intensity] - correct order for Leaflet
        return [meta.lat, meta.lon, city.aqi / maxAqi];
    });

    heatLayer = L.heatLayer(heatPoints, {
        radius: 20,
        blur: 10,
        maxZoom: 10,
        max: 1.0,
        gradient: {
            0.0: '#00C853',
            0.25: '#FFD600',
            0.5: '#FF6D00',
            0.75: '#C62828',
            1.0: '#C62828'
        }
    }).addTo(leafletMap);
}

function createMapMarker(cityId) {
    const meta = cityMeta[cityId];
    const city = cityData[cityId];
    if (!meta || !city) return;

    const category = getAQICategory(city.aqi);
    const shortName = city.name.split(',')[0];

    const marker = L.circleMarker([meta.lat, meta.lon], {
        radius: 7,
        fillColor: category.color,
        color: 'rgba(255,255,255,0.3)',
        weight: 1,
        fillOpacity: 0.85
    }).addTo(leafletMap);

    marker.bindTooltip(
        `<b>${shortName}</b><br>` +
        `<span class="tooltip-aqi" style="color:${category.color}">AQI: ${city.aqi}</span><br>` +
        `<span class="tooltip-status" style="color:${category.color}">${category.label}</span>`,
        {
            direction: 'top',
            offset: [0, -8],
            className: 'aqi-tooltip',
            permanent: false
        }
    );

    marker.on('click', function() {
        selectCity(cityId);
    });

    cityMarkers[cityId] = marker;
}

function updateMapMarker(cityId) {
    const marker = cityMarkers[cityId];
    const city = cityData[cityId];
    const meta = cityMeta[cityId];
    if (!marker || !city || !meta) return;

    const category = getAQICategory(city.aqi);
    const shortName = city.name.split(',')[0];

    marker.setStyle({
        fillColor: category.color,
        radius: cityId === currentCity ? 10 : 7,
        weight: cityId === currentCity ? 2 : 1
    });

    marker.setTooltipContent(
        `<b>${shortName}</b><br>` +
        `<span class="tooltip-aqi" style="color:${category.color}">AQI: ${city.aqi}</span><br>` +
        `<span class="tooltip-status" style="color:${category.color}">${category.label}</span>`
    );
}

function highlightMapMarker(cityId) {
    Object.keys(cityMarkers).forEach(id => {
        const marker = cityMarkers[id];
        if (marker) {
            marker.setStyle({
                radius: id === cityId ? 10 : 7,
                weight: id === cityId ? 2 : 1,
                color: id === cityId ? '#fff' : 'rgba(255,255,255,0.3)'
            });
        }
    });
}

// ===================================
// NOTIFICATION CENTER
// ===================================

function updateNotificationCenter(cityId) {
    const city = cityData[cityId];
    const listEl = document.getElementById('alertList');
    const statusEl = document.getElementById('alertStatus');
    if (!city || !listEl || !statusEl) return;

    listEl.innerHTML = '';
    statusEl.classList.remove('critical', 'warning');

    if (city.aqi >= criticalThreshold) {
        statusEl.textContent = 'Critical';
        statusEl.classList.add('critical');
        listEl.innerHTML = `
            <div class="alert-card critical">
                <div class="alert-card-title">Critical AQI in ${city.name.split(',')[0]}</div>
                <div class="alert-card-body">AQI ${city.aqi} exceeds emergency threshold. Immediate response required.</div>
            </div>
            <div class="alert-card warning">
                <div class="alert-card-title">Citizen Health Risk</div>
                <div class="alert-card-body">Issue advisories for schools, hospitals, and transit routes.</div>
            </div>
        `;
    } else if (city.aqi >= warningThreshold) {
        statusEl.textContent = 'Elevated';
        statusEl.classList.add('warning');
        listEl.innerHTML = `
            <div class="alert-card warning">
                <div class="alert-card-title">High AQI Watch</div>
                <div class="alert-card-body">${city.name.split(',')[0]} is above safe limits. Increase monitoring.</div>
            </div>
        `;
    } else {
        statusEl.textContent = 'Monitoring';
        listEl.innerHTML = `
            <div class="alert-card neutral">
                <div class="alert-card-title">All systems nominal</div>
                <div class="alert-card-body">AQI levels are within acceptable range.</div>
            </div>
        `;
    }
}

// ===================================
// CHARTS
// ===================================

function initializeCharts() {
    initAQITrendChart();
    initPollutantChart();
    initCorrelationChart();
}

function updateCharts() {
    updateAQITrendChart();
    updatePollutantChart();
    updateCorrelationChart();
}

// --- AQI Trend Chart ---

function initAQITrendChart() {
    const ctx = document.getElementById('aqiTrendChart');
    if (!ctx) return;

    const city = cityData[currentCity];
    const labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
    const color = getAQIColor(city.aqi);

    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, color + '40');
    gradient.addColorStop(1, color + '05');

    aqiTrendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'AQI',
                data: city.trend,
                borderColor: color,
                backgroundColor: gradient,
                borderWidth: 2,
                fill: true,
                tension: 0.3,
                pointRadius: 1,
                pointHoverRadius: 4,
                pointBackgroundColor: color,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: color,
                pointHoverBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1e1e1e',
                    titleColor: '#EAEAEA',
                    bodyColor: '#EAEAEA',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return 'AQI: ' + context.parsed.y;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.04)', drawBorder: false },
                    ticks: { color: '#777', maxTicksLimit: 8, font: { size: 11 } }
                },
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.04)', drawBorder: false },
                    ticks: { color: '#777', font: { size: 11 } }
                }
            },
            interaction: { intersect: false, mode: 'index' }
        }
    });
}

function updateAQITrendChart() {
    if (!aqiTrendChart) return;

    const city = cityData[currentCity];
    const color = getAQIColor(city.aqi);

    aqiTrendChart.data.datasets[0].data = city.trend;
    aqiTrendChart.data.datasets[0].borderColor = color;
    aqiTrendChart.data.datasets[0].pointBackgroundColor = color;
    aqiTrendChart.data.datasets[0].pointHoverBorderColor = color;

    const gradient = aqiTrendChart.canvas.getContext('2d').createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, color + '40');
    gradient.addColorStop(1, color + '05');
    aqiTrendChart.data.datasets[0].backgroundColor = gradient;

    aqiTrendChart.update('none');
}

// --- Pollutant Distribution Chart ---

function initPollutantChart() {
    const ctx = document.getElementById('pollutantChart');
    if (!ctx) return;

    const city = cityData[currentCity];

    pollutantChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['PM2.5', 'PM10', 'O₃', 'NO₂', 'SO₂', 'CO'],
            datasets: [{
                data: [
                    city.pollutants.pm25.value,
                    city.pollutants.pm10.value,
                    city.pollutants.o3.value,
                    city.pollutants.no2.value,
                    city.pollutants.so2.value,
                    city.pollutants.co.value * 10
                ],
                backgroundColor: [
                    '#FF6D00',   // PM2.5 - orange
                    '#C62828',   // PM10 - deep red
                    '#FFD600',   // O3 - yellow
                    '#FF6D00',   // NO2 - orange
                    '#00C853',   // SO2 - green
                    '#00C853'    // CO - green
                ],
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 4,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1e1e1e',
                    titleColor: '#EAEAEA',
                    bodyColor: '#EAEAEA',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    padding: 10,
                    callbacks: {
                        label: function(context) {
                            const pollutant = ['pm25', 'pm10', 'o3', 'no2', 'so2', 'co'][context.dataIndex];
                            const data = cityData[currentCity].pollutants[pollutant];
                            return data.value + ' ' + data.unit;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.04)', drawBorder: false },
                    ticks: { color: '#777', font: { size: 11 } }
                },
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.04)', drawBorder: false },
                    ticks: { color: '#777', font: { size: 11 } }
                }
            }
        }
    });
}

function updatePollutantChart() {
    if (!pollutantChart) return;

    const city = cityData[currentCity];
    pollutantChart.data.datasets[0].data = [
        city.pollutants.pm25.value,
        city.pollutants.pm10.value,
        city.pollutants.o3.value,
        city.pollutants.no2.value,
        city.pollutants.so2.value,
        city.pollutants.co.value * 10
    ];
    pollutantChart.update('none');
}

// --- Correlation Chart with Regression ---

function linearRegression(data) {
    const n = data.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
    data.forEach(({ x, y }) => {
        sumX += x;
        sumY += y;
        sumXY += x * y;
        sumX2 += x * x;
        sumY2 += y * y;
    });
    const denom = n * sumX2 - sumX * sumX;
    const slope = denom !== 0 ? (n * sumXY - sumX * sumY) / denom : 0;
    const intercept = (sumY - slope * sumX) / n;
    const denomR = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
    const r = denomR !== 0 ? (n * sumXY - sumX * sumY) / denomR : 0;
    return { slope, intercept, r };
}

function initCorrelationChart() {
    const ctx = document.getElementById('correlationChart');
    if (!ctx) return;

    const cityNames = Object.keys(cityData);
    // Fixed respiratory case rates per 100k (correlated with AQI)
    const caseLookup = {
        delhi: 1250, mumbai: 920, bangalore: 650, kolkata: 670,
        chennai: 455, hyderabad: 565, pune: 525, ahmedabad: 610,
        jaipur: 780, lucknow: 850
    };
    const scatterData = cityNames.map(id => ({
        x: cityData[id].aqi,
        y: caseLookup[id] || Math.round(cityData[id].aqi * 3.2)
    }));

    const { slope, intercept, r } = linearRegression(scatterData);
    const xValues = scatterData.map(d => d.x);
    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues);

    const regressionLine = [
        { x: minX, y: slope * minX + intercept },
        { x: maxX, y: slope * maxX + intercept }
    ];

    // Store for updates
    window._correlationData = {
        labels: cityNames.map(id => cityData[id].name.split(',')[0]),
        scatterData,
        r
    };

    // Update the correlation index in stat cards
    const corrEl = document.getElementById('correlationValue');
    if (corrEl) corrEl.textContent = Math.abs(r).toFixed(2);

    const rValuePlugin = {
        id: 'rValueAnnotation',
        afterDraw(chart) {
            const { ctx: c, chartArea } = chart;
            if (!chartArea) return;
            c.save();
            c.font = '600 13px Inter, sans-serif';
            c.fillStyle = '#EAEAEA';
            c.textAlign = 'right';
            c.fillText(
                `R = ${Math.abs(window._correlationData.r).toFixed(2)} (Strong Correlation)`,
                chartArea.right - 8,
                chartArea.top + 18
            );
            c.restore();
        }
    };

    correlationChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Cities',
                    data: scatterData,
                    backgroundColor: '#4FC3F7',
                    borderColor: '#4FC3F7',
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#4FC3F7',
                    pointHoverBorderWidth: 2
                },
                {
                    label: 'Trend Line',
                    data: regressionLine,
                    type: 'line',
                    borderColor: 'rgba(255, 255, 255, 0.35)',
                    borderWidth: 2,
                    borderDash: [6, 3],
                    pointRadius: 0,
                    fill: false,
                    tension: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1e1e1e',
                    titleColor: '#EAEAEA',
                    bodyColor: '#EAEAEA',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    padding: 10,
                    filter: function(tooltipItem) {
                        return tooltipItem.datasetIndex === 0;
                    },
                    callbacks: {
                        title: function(context) {
                            if (context[0].datasetIndex !== 0) return '';
                            return window._correlationData.labels[context[0].dataIndex] || '';
                        },
                        label: function(context) {
                            if (context.datasetIndex !== 0) return '';
                            return [
                                'AQI: ' + context.parsed.x,
                                'Respiratory Cases: ' + context.parsed.y + ' per 100k'
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Air Quality Index (AQI)',
                        color: '#b0b0b0',
                        font: { size: 12, family: 'Inter' }
                    },
                    grid: { color: 'rgba(255, 255, 255, 0.04)', drawBorder: false },
                    ticks: { color: '#777', font: { size: 11 } }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Respiratory Cases (per 100k)',
                        color: '#b0b0b0',
                        font: { size: 12, family: 'Inter' }
                    },
                    grid: { color: 'rgba(255, 255, 255, 0.04)', drawBorder: false },
                    ticks: { color: '#777', font: { size: 11 } }
                }
            }
        },
        plugins: [rValuePlugin]
    });
}

function updateCorrelationChart() {
    if (!correlationChart || !window._correlationData) return;

    const cityNames = Object.keys(cityData);
    const currentIndex = cityNames.indexOf(currentCity);

    const colors = window._correlationData.scatterData.map((_, i) =>
        i === currentIndex ? '#fff' : '#4FC3F7'
    );
    const sizes = window._correlationData.scatterData.map((_, i) =>
        i === currentIndex ? 7 : 4
    );

    correlationChart.data.datasets[0].backgroundColor = colors;
    correlationChart.data.datasets[0].borderColor = colors;
    correlationChart.data.datasets[0].pointRadius = sizes;
    correlationChart.update('none');
}

// ===================================
// LIVE DATA
// ===================================

async function fetchOpenAQ(cityName) {
    const url = `${apiConfig.openaqBase}?limit=200&city=${encodeURIComponent(cityName)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`OpenAQ error ${response.status}`);
    return response.json();
}

async function fetchOpenMeteo(lat, lon) {
    const url = `${apiConfig.openMeteoBase}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=Asia%2FKolkata`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Open-Meteo error ${response.status}`);
    return response.json();
}

function applyLiveMeasurements(cityId, airData, weatherData) {
    const city = cityData[cityId];
    if (!city) return;

    if (airData) {
        const measurements = airData.results?.[0]?.measurements || [];
        const latest = {};
        measurements.forEach((measurement) => {
            const key = measurement.parameter.toLowerCase();
            if (!["pm25", "pm10", "o3", "no2", "so2", "co"].includes(key)) return;
            const existing = latest[key];
            const updatedAt = new Date(measurement.lastUpdated || measurement.date?.utc || 0).getTime();
            if (!existing || updatedAt > existing.updatedAt) {
                latest[key] = {
                    value: measurement.value,
                    unit: measurement.unit || existing?.unit,
                    updatedAt
                };
            }
        });

        const pm25Value = latest.pm25?.value ?? city.pollutants.pm25.value;
        const pm10Value = latest.pm10?.value ?? city.pollutants.pm10.value;
        const o3Value = latest.o3?.value ?? city.pollutants.o3.value;
        const no2Value = latest.no2?.value ?? city.pollutants.no2.value;
        const so2Value = latest.so2?.value ?? city.pollutants.so2.value;
        const coValue = latest.co?.value ?? city.pollutants.co.value;

        const aqi = calculateAQIFromPM25(pm25Value) ?? city.aqi;
        const category = getAQICategory(aqi);

        city.aqi = aqi;
        city.category = category.className;
        city.pm25 = Math.round(pm25Value);
        city.pollutants = {
            pm25: { value: Math.round(pm25Value), unit: latest.pm25?.unit || city.pollutants.pm25.unit, percent: toPercent(pm25Value, normalLimits.pm25) },
            pm10: { value: Math.round(pm10Value), unit: latest.pm10?.unit || city.pollutants.pm10.unit, percent: toPercent(pm10Value, normalLimits.pm10) },
            o3: { value: Math.round(o3Value), unit: latest.o3?.unit || city.pollutants.o3.unit, percent: toPercent(o3Value, normalLimits.o3) },
            no2: { value: Math.round(no2Value), unit: latest.no2?.unit || city.pollutants.no2.unit, percent: toPercent(no2Value, normalLimits.no2) },
            so2: { value: Math.round(so2Value), unit: latest.so2?.unit || city.pollutants.so2.unit, percent: toPercent(so2Value, normalLimits.so2) },
            co: { value: Number.isFinite(coValue) ? Math.round(coValue * 10) / 10 : city.pollutants.co.value, unit: latest.co?.unit || city.pollutants.co.unit, percent: toPercent(coValue, normalLimits.co) }
        };
        city.healthAdvice = getHealthAdvice(aqi);
        city.trend = [...city.trend.slice(1), aqi];
    }

    if (weatherData?.current) {
        city.temp = `${Math.round(weatherData.current.temperature_2m)}°C`;
        city.humidity = `${Math.round(weatherData.current.relative_humidity_2m)}%`;
        city.wind = `${Math.round(weatherData.current.wind_speed_10m)} km/h`;
    }
}

async function refreshLiveData() {
    const feedStatusEl = document.getElementById('mapFeedStatus');
    if (feedStatusEl) feedStatusEl.textContent = 'Loading';

    const cityIds = Object.keys(cityData);
    const results = await Promise.allSettled(
        cityIds.map(async (cityId) => {
            const meta = cityMeta[cityId];
            if (!meta) return { cityId, airOk: false, weatherOk: false };
            const [airRes, weatherRes] = await Promise.allSettled([
                fetchOpenAQ(meta.openaq),
                fetchOpenMeteo(meta.lat, meta.lon)
            ]);

            const airData = airRes.status === 'fulfilled' ? airRes.value : null;
            const weatherData = weatherRes.status === 'fulfilled' ? weatherRes.value : null;
            applyLiveMeasurements(cityId, airData, weatherData);
            updateCityListAndMarkers(cityId);
            return { cityId, airOk: !!airData, weatherOk: !!weatherData };
        })
    );

    const successCount = results.filter(r => r.status === 'fulfilled' && r.value.airOk).length;
    if (feedStatusEl) feedStatusEl.textContent = successCount ? 'Live' : 'Cached';

    // Update heatmap
    updateHeatLayer();
    highlightMapMarker(currentCity);

    updateSummaryStats();
    updateCityDisplay(currentCity);
    updateCharts();
    updateNotificationCenter(currentCity);
    updateHealthRecommendations(currentCity);
}

// ===================================
// UTILITIES
// ===================================

function filterCities(searchTerm) {
    const cityItems = document.querySelectorAll('.city-item');
    searchTerm = searchTerm.toLowerCase();
    cityItems.forEach(item => {
        const cityName = item.querySelector('.city-name').textContent.toLowerCase();
        item.style.display = cityName.includes(searchTerm) ? 'flex' : 'none';
    });
}

function updateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Kolkata',
        timeZoneName: 'short'
    };
    document.getElementById('updateTime').textContent = now.toLocaleString('en-IN', options);
}

// Console
console.log('%cUrbanAir Insight Dashboard', 'color: #EAEAEA; font-size: 16px; font-weight: bold;');
console.log('%cAir Quality × Respiratory Health Intelligence', 'color: #b0b0b0; font-size: 12px;');

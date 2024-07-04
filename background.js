// By Danyal Shahmirzadi

function updateIranTime() {
    const utcTime = new Date().toUTCString(); // Get current UTC time
    const iranTime = new Date(utcTime).toLocaleTimeString("en-US", { timeZone: "Asia/Tehran", hour12: false });
    const [hours, minutes] = iranTime.split(':');
    const timeWithoutSeconds = `${hours}:${minutes}`;
    chrome.action.setBadgeText({ text: timeWithoutSeconds });
    chrome.action.setBadgeBackgroundColor({ color: '#000000' }); // Set background color to black
}

// Update the time immediately when the extension loads
updateIranTime();

// Update the time every 1 second
setInterval(updateIranTime, 1000);

// Listen for system wake-up from sleep
chrome.idle.onStateChanged.addListener((newState) => {
    if (newState === "active") {
        updateIranTime();
    }
});

// Listen for extension startup
chrome.runtime.onStartup.addListener(() => {
    updateIranTime();
});

// Optional: Listen for extension install/update
chrome.runtime.onInstalled.addListener(() => {
    updateIranTime();
});

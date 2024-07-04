function updateIranTime() {
    const iranTime = new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Tehran", hour12: false });
    document.getElementById('time').textContent = iranTime;
}

updateIranTime();
setInterval(updateIranTime, 1000);

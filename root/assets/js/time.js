function updateTime() {
    const now = new Date();
    document.getElementById('time-la').textContent = now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
    document.getElementById('time-chi').textContent = now.toLocaleString('en-US', { timeZone: 'America/Chicago' });
    document.getElementById('time-ny').textContent = now.toLocaleString('en-US', { timeZone: 'America/New_York' });
}

// Update times every second
updateTime();
setInterval(updateTime, 1000);

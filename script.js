async function updateTime() {
    try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Seoul');
        const data = await response.json();
        const datetime = new Date(data.datetime);
        const hours = datetime.getHours().toString().padStart(2, '0');
        const minutes = datetime.getMinutes().toString().padStart(2, '0');
        const seconds = datetime.getSeconds().toString().padStart(2, '0');
        
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clock').textContent = timeString;
    } catch (error) {
        console.error('Error fetching time:', error);
        document.getElementById('clock').textContent = 'Failed to load time';
    }
}

// 초기 시간 업데이트
updateTime();

// 1초마다 시간 업데이트
setInterval(updateTime, 1000);

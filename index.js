let days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('updateYear');



const currentYear = new Date().getFullYear();
year.textContent = currentYear;
const newYear = new Date(`January 01 ${currentYear+1} 00:00:00`);

function updateCount(){
    const currentTime = new Date();
    const diff = newYear - currentTime;
    const day = Math.floor(diff/1000/60/60/24);
    const hour = Math.floor(diff/1000/60/60)%24;
    const min = Math.floor(diff/1000/60/60)%60;
    const sec = Math.floor(diff/1000)%60;
    days.innerHTML = day;
    hours.textContent = hour<10 ? "0"+hour:hour;
    minutes.textContent = min<10 ? "0"+min : min;
    seconds.textContent = sec<10 ? '0'+sec : sec;
};

setInterval(updateCount,1000);

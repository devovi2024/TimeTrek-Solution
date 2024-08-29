class TimeTrek {
    constructor(){
        this.startTime = null;
        this.timerInterval = null;
        this.init()
    }

    init() {
        this.startBtn = document.getElementById('startBtn');
        this.stopBtn = document.getElementById('stopBtn');
        this.timeDisplay = document.getElementById('timeDisplay');
        this.logList = document.getElementById('logList');
        this.logCategoryBtn = document.getElementById('logCategoryBtn');
        this.dailySummaryBtn = document.getElementById('dailySummaryBtn');


        // Using Method 
        this.startBtn.onclick = () => this.startTimer();
        this.stopBtn.onclick = () => this.stopTimer();
        this.logCategoryBtn.onclick = () => this.addCategory();
        this.dailySummaryBtn.onclick = () => this.showDailySummary();


        // Initial Step 
        this.stopBtn.disabled = true;


    }


        formatTime(second){
        const hrs = Math.floor(second / 3600);
        const mins = Math.floor((second % 3600) / 60);
        const secs = second % 60;
        return [hrs, mins, secs].map(unit => unit.toString().padStart(2, '0')).join(':')

    }

        startTimer() {
        this.startTime = Date.now();
        this.timerInterval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
            this.timeDisplay.textContent = this.formatTime(elapsed);
        }, 1000);
        this.startBtn.disabled = true;
        this.stopBtn.disabled = false;
    }

    stopTimer(){
        clearInterval(this.timerInterval);
        const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
        this.logList.innerHTML += `<li>${this.formatTime(elapsed)}</li>`;
        this.startBtn.disabled = false;
        this.stopBtn.disabled = true;
        this.timeDisplay.textContent = '00:00:00'
    }

        addCategory() {
        const category= prompt('Enter category for this log');
        if(category){
            const elapsed = Math.floor((Date.now() - this.startTime) / 1000)
            this.logList.innerHTML += `<li>Category: ${category} | ${this.formatTime(elapsed)}</li>`
        }
    }

    showDailySummary() {
        const logs = this.logList.getElementsByTagName('li');
        let totalSecond = 0;
        for(let log of logs){
            const timeStr = log.textContent.split('|')[1];
            const [hours , minutes, seconds] = timeStr.split(':').map(Number);
            totalSecond += hours * 3600 + minutes  * 60 + seconds
        }
        alert(`Total time Today: ${this.formatTime(totalSecond)}`)
    }

}

// Initialize the TimeTrek class when the DOM is ready
document.addEventListener('DOMContentLoaded', () => new TimeTrek())


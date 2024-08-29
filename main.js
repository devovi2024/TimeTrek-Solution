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


}

// Initialize the TimeTrek class when the DOM is ready
document.addEventListener('DOMContentLoaded', () => new TimeTrek())


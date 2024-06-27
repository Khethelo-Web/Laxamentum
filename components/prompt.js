// SIDEBAR TOGGLE

var addPrompt = document.querySelector('.addPrompt-container');
var btnAddPrompt = document.querySelector('.addPrompt');
var btnViewPrompt = document.querySelector('.ViewPrompt');

var barChart = document.querySelector('.bar-chart');
var btnEfficiency = document.querySelector('.efficiency');
var btnAutomation = document.querySelector('.automation');
var btnAnalytical = document.querySelector('.analytical');

btnEfficiency.addEventListener('click', () => {
  barChart.classList.add("active");
})

btnAutomation.addEventListener('click', () => {
  barChart.classList.add("active");
})

btnAnalytical.addEventListener('click', () => {
  barChart.classList.add("active");
})

btnAddPrompt.addEventListener('click', () => {
    addPrompt.classList.add("active");
})



function closeSidebar() {
  if(addPromptOpen) {
    addPrompt.classList.remove("active");
    addPromptOpen = false;
  }
}



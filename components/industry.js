// SIDEBAR TOGGLE

var addPrompt = document.querySelector('.addPrompt-container');
var btnAddPrompt = document.querySelector('.addPrompt');
var btnViewPrompt = document.querySelector('.ViewPrompt');

var barChart = document.querySelector('.bar-chart');
var btnBeginner = document.querySelector('.btnBeginner');
var btnModerate = document.querySelector('.btnModerate');
var btnDifficult = document.querySelector('.btnDifficult');
var btnExtreme = document.querySelector('.btnExtreme');

const box = document.querySelector('.box');
const notification = document.querySelector('.notification');
let toggle = "true";

notification.addEventListener('click', () => {

  if (toggle === "true") {
    toggle = "false"
    box.classList.add("active");
  } else {
    toggle = "true";
    box.classList.remove("active");
  }  
})

btnBeginner.addEventListener('click', () => {
  localStorage.setItem("Level", "Beginner");
  barChart.classList.add("active");
})

btnModerate.addEventListener('click', () => {
  localStorage.setItem("Level", "Moderate");
  barChart.classList.add("active");
})

btnDifficult.addEventListener('click', () => {
  localStorage.setItem("Level", "Difficult");
  barChart.classList.add("active");
})

btnExtreme.addEventListener('click', () => {
  localStorage.setItem("Level", "Extreme");
  barChart.classList.add("active");
})



function closeSidebar() {
  if(addPromptOpen) {
    addPrompt.classList.remove("active");
    addPromptOpen = false;
  }
}



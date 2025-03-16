// SIDEBAR TOGGLE

var addPrompt = document.querySelector('.addPrompt-container');
var btnAddPrompt = document.querySelector('.addPrompt');
var btnViewPrompt = document.querySelector('.ViewPrompt');

var barChart = document.querySelector('.bar-chart');

let toggle = "false";

const sideMenu = document.querySelector('.SideMenu');
const title = document.querySelector('.header-title');
const mainTitle = document.querySelector('.main-title');
const level_container = document.querySelector('.level-container');

title.addEventListener('click', () => {

  if (toggle === "true") {
    toggle = "false";
    sideMenu.classList.add("open");
    mainTitle.classList.add("active");
    level_container.classList.add("open");
  } else {
    toggle = "true";
    sideMenu.classList.remove("open");
    mainTitle.classList.remove("active");
    level_container.classList.remove("open");
  }
  
});


function closeSidebar() {
  if(addPromptOpen) {
    addPrompt.classList.remove("active");
    addPromptOpen = false;
  }
}



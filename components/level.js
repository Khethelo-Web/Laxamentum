// SIDEBAR TOGGLE

var addPrompt = document.querySelector('.addPrompt-container');
var btnAddPrompt = document.querySelector('.addPrompt');
var btnViewPrompt = document.querySelector('.ViewPrompt');

var barChart = document.querySelector('.bar-chart');
var btnEfficiency = document.querySelector('.efficiency');
var btnAutomation = document.querySelector('.automation');
var btnAnalytical = document.querySelector('.analytical');

const box = document.querySelector('.box');
const notification = document.querySelector('.notification');
let toggle = "false";

const sideMenu = document.querySelector('.SideMenu');
const title = document.querySelector('.header-title');

const Admin = document.getElementById('Admin_Level');
const Finance = document.getElementById('Finance_Level');
const btnAdmin = document.getElementById('btnAdmin');
const btnFinance = document.getElementById('btnFinance');
const level = document.querySelector('.level');
const icon = document.querySelector('.icon');
const level_list = document.querySelector('.level-list');



title.addEventListener('click', () => {

  sideMenu.classList.add("open");

  if (toggle === "true") {
    toggle = "false"
    sideMenu.classList.add("open");
  } else {
    toggle = "true";
    sideMenu.classList.remove("open");
  }
  
})

btnAdmin.addEventListener('click', () => {

  Admin.children[1].classList.add("open");
  Admin.children[0].children[0].classList.add("open");
  console.log(Admin.children[1].children[0])
  var btnBeginner = Admin.children[1].children[0];
  var btnMedium = Admin.children[1].children[1];
  var btnDifficult = Admin.children[1].children[2];
  btnBeginner.addEventListener('click', () => {
    console.log("This is Beginner");
  });
  btnMedium.addEventListener('click', () => {
    console.log("This is Medium");
  });
  btnDifficult.addEventListener('click', () => {
    console.log("This is Difficult");
  });

  if (toggle === "true") {
    toggle = "false"
    Admin.children[1].classList.add("open");
    Admin.children[0].children[0].classList.add("open");
  } else {
    toggle = "true";
    Admin.children[1].classList.remove("open");
    Admin.children[0].children[0].classList.remove("open");
  }

});

btnFinance.addEventListener('click', () => {

  Finance.children[1].classList.add("open");
  Finance.children[0].children[0].classList.add("open");

  if (toggle === "true") {
    toggle = "false"
    Finance.children[1].classList.add("open");
    Finance.children[0].children[0].classList.add("open");
  } else {
    toggle = "true";
    Finance.children[1].classList.remove("open");
    Finance.children[0].children[0].classList.remove("open");
  }

});


function closeSidebar() {
  if(addPromptOpen) {
    addPrompt.classList.remove("active");
    addPromptOpen = false;
  }
}









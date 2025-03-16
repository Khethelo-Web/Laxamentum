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
const mainTitle = document.querySelector('.main-title');

const Data_Analysis = document.getElementById('Data_Analysis_Level');
const Excel = document.getElementById('Excel_Level');
const Account = document.getElementById('Account_Level');
const Admin = document.getElementById('Admin_Level');
const Finance = document.getElementById('Finance_Level');
const btnAccount = document.getElementById('btnAccounting');
const btnDataAnalysis = document.getElementById('btnDataAnalysis');
const btnExcel = document.getElementById('btnExcel');
const btnAdmin = document.getElementById('btnAdmin');
const btnFinance = document.getElementById('btnFinance');
const level = document.querySelector('.level');
const icon = document.querySelector('.icon');
const level_container = document.querySelector('.level-container');
const level_list = document.querySelector('.level-list');



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

btnAccounting.addEventListener('click', () => {

  console.log(Account.children[1].children[0])
  var btnBeginner = Account.children[1].children[0];
  var btnMedium = Account.children[1].children[1];
  var btnDifficult = Account.children[1].children[2];
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
    Account.children[1].classList.add("open");
    Account.children[0].children[0].classList.add("open");
  } else {
    toggle = "true";
    Account.children[1].classList.remove("open");
    Account.children[0].children[0].classList.remove("open");
  }

});


btnAdmin.addEventListener('click', () => {

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

btnDataAnalysis.addEventListener('click', () => {

  console.log(Data_Analysis.children[1].children[0])
  var btnBeginner = Data_Analysis.children[1].children[0];
  var btnModerate = Data_Analysis.children[1].children[1];
  var btnDifficult = Data_Analysis.children[1].children[2];
  btnBeginner.addEventListener('click', () => {
    console.log("This is Beginner");
  });
  btnModerate.addEventListener('click', () => {
    console.log("This is Medium");
  });
  btnDifficult.addEventListener('click', () => {
    console.log("This is Difficult");
  });

  if (toggle === "true") {
    toggle = "false"
    Data_Analysis.children[1].classList.add("open");
    Data_Analysis.children[0].children[0].classList.add("open");
  } else {
    toggle = "true";
    Data_Analysis.children[1].classList.remove("open");
    Data_Analysis.children[0].children[0].classList.remove("open");
  }

});

btnExcel.addEventListener('click', () => {

  console.log(Excel.children[1].children[0])
  var btnBeginner = Excel.children[1].children[0];
  var btnModerate = Excel.children[1].children[1];
  var btnDifficult = Excel.children[1].children[2];
  btnBeginner.addEventListener('click', () => {
    console.log("This is Beginner");
  });
  btnModerate.addEventListener('click', () => {
    console.log("This is Medium");
  });
  btnDifficult.addEventListener('click', () => {
    console.log("This is Difficult");
  });

  if (toggle === "true") {
    toggle = "false"
    Excel.children[1].classList.add("open");
    Excel.children[0].children[0].classList.add("open");
  } else {
    toggle = "true";
    Excel.children[1].classList.remove("open");
    Excel.children[0].children[0].classList.remove("open");
  }

});

btnFinance.addEventListener('click', () => {

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









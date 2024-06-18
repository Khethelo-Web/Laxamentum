// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



const btnComputer = document.getElementById('btnComputer');
const btnAnalytics = document.getElementById('btnAnalytics');
const btnAdministrative = document.getElementById('btnAdministrative');
const btnFinance = document.getElementById('btnFinance');
const btnSales = document.getElementById('btnSales');

btnAdministrative.addEventListener('click', () => {
  localStorage.setItem("Key", "Administrative");
});

btnFinance.addEventListener('click', () => {
  localStorage.setItem("Key", "Finance");
});

btnSales.addEventListener('click', () => {
  localStorage.setItem("Key", "Sales");
});




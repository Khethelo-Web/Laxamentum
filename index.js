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
const administrative = document.getElementById('administrative');

administrative.addEventListener('click', () =>{
  changePage.href="/administrative/administrative.html";
});

btnComputer.addEventListener('click', () =>{
  window.location.href="/Framework/Computer/computer.html";
});

btnAnalytics.addEventListener('click', () =>{
  window.location.href="/Framework/Analytics/analytics.html";
});

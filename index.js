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



const btnAministrative = document.getElementById('btnAdministrative');
const btnAnalytics = document.getElementById('btnAnalytics');
const administrative = document.getElementById('administrative');

 btnAministrative.addEventListener('click', () =>{
  administrative.href="administrative.html";
});

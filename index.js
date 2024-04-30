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


const administrative = document.querySelector('.administrative');
const btnComputer = document.getElementById('btnComputer');
const btnAnalytics = document.getElementById('btnAnalytics');

 btnComputer.addEventListener('click', () =>{
  administrative.href="administrative.html";
});

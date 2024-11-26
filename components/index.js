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
const btnProgramming = document.getElementById('btnProgramming');
const btnFinance = document.getElementById('btnFinance');
const btnSales = document.getElementById('btnSales');
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

btnAdministrative.addEventListener('click', () => {
  localStorage.setItem("Key", "Administrative");
  localStorage.setItem("Level", "Beginner");
  window.location.href = "level.html";
});

btnFinance.addEventListener('click', () => {
  localStorage.setItem("Key", "Finance");
  localStorage.setItem("Level", "Beginner");
  window.location.href = "level.html";
});

btnSales.addEventListener('click', () => {
  localStorage.setItem("Key", "Sales");
  localStorage.setItem("Level", "Beginner");
  window.location.href = "level.html";
});

btnProgramming.addEventListener('click', () => {
  localStorage.setItem("Key", "Programming");
  localStorage.setItem("Level", "Beginner");
  window.location.href = "level.html";
});


const btnSend = document.querySelector('.btnSend');
const counter = document.querySelector('.counter');

let count = 0;

btnSend.addEventListener('click', () => {
  count++
  counter.innerHTML = count;
  Notification.requestPermission().then(perm => {
    if (perm === "granted"){
      const notification = new Notification("Example notification", {
        body: "This is more text",
        data: {hello: "World" }
      })

      notification.addEventListener("error", e => {
        alert(error);
      })

    }
  })
})

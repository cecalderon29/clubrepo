const sidebar = document.querySelector(".sidebar");
const toggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");

function toggleSidebar() {
  sidebar.classList.toggle('hide');
}

// Close sidebar when clicking a link inside it 
sidebar.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => sidebar.classList.add('hide'));
});

// Close sidebar when clicking anywhere outside it
document.addEventListener('click', (e) => {
  const openBtn = document.getElementById('openSidebar');
  if (!sidebar.classList.contains('hide') && !sidebar.contains(e.target) && e.target !== openBtn) {
    sidebar.classList.add('hide');
  }
});

// wire up the open button
document.getElementById('openSidebar').addEventListener('click', (e) => {
  e.stopPropagation(); // prevent the document handler from immediately closing it
  toggleSidebar();
});
// Dropdown toggle
document.querySelectorAll(".dropdown-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("open");
  });
});

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("dark-mode");
    themeLabel.textContent = "🌙 Dark";
  } else {
    document.body.classList.remove("dark-mode");
    themeLabel.textContent = "🌞 Light";
  }
});


document.getElementById("toggleButton").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.classList.contains("expandedSideBar")) {
    sidebar.classList.remove("expandedSideBar");
    sidebar.classList.add("collapseSideBar");
  } else {
    sidebar.classList.remove("collapseSideBar");
    sidebar.classList.add("expandedSideBar");
  }
});

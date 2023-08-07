function changeMenuVisibility() {
  let menuItems = document.getElementById("menu-items");
  if (menuItems.style.display === "") {
    menuItems.style.display = "flex";
  } else if (menuItems.style.display === "none") {
    menuItems.style.display = "flex";
  } else {
    menuItems.style.display = "none";
  }
}

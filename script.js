const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActivClass();
    panel.classList.add("active");
  });
});

function removeActivClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

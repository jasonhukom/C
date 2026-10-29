const celebrateBtn = document.getElementById("celebrateBtn");
const toast = document.getElementById("toast");

if (celebrateBtn && toast) {
  celebrateBtn.addEventListener("click", () => {
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 1800);
  });
}

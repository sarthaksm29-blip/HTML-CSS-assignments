const filterButtons = document.querySelectorAll(".filter-btn");
const plantCards = document.querySelectorAll(".plant-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    plantCards.forEach((card) => {
      if (filter === "all" || card.dataset.category.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const helloBtn = document.getElementById("helloBtn");
const helloMsg = document.getElementById("helloMsg");

helloBtn.addEventListener("click", () => {
  helloMsg.textContent = "Thanks for visiting GreenNest. See you soon!";
});
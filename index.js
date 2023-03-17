const card = document.querySelector(".card-content");

card.addEventListener("touch", () => {
  card.style.transform = "rotateZ(180deg)";
});

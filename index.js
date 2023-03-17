const card = document.querySelector(".card");

card.addEventListener("touch", () => {
  card.style.transform = "rotateZ(180deg)";
});

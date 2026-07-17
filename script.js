const introPage = document.getElementById("intro");
const proposalPage = document.getElementById("proposal");
const gifPage = document.getElementById("gifPage");
const maybeBtn = document.getElementById("maybeBtn");
const yesBtn = document.getElementById("yesBtn");

window.addEventListener("load", () => {
  setTimeout(() => {
    introPage.classList.remove("active");
    proposalPage.classList.add("active");
  }, 5000);
});

maybeBtn.addEventListener("mouseenter", () => {
  const card = document.querySelector(".card");
  const cardRect = card.getBoundingClientRect();
  const buttonRect = maybeBtn.getBoundingClientRect();
  const maxLeft = Math.max(0, cardRect.width - buttonRect.width - 24);
  const maxTop = Math.max(0, cardRect.height - buttonRect.height - 24);

  const left = Math.random() * maxLeft;
  const top = Math.random() * maxTop;

  maybeBtn.style.left = `${left}px`;
  maybeBtn.style.top = `${top}px`;
});

yesBtn.addEventListener("click", () => {
  proposalPage.classList.remove("active");
  gifPage.classList.add("active");
});

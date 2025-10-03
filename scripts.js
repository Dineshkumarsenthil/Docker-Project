// 3D modal button functionality
const button = document.querySelector("button");

const modal = document.createElement("div");
modal.id = "modal";
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>Hello!</h2>
    <p>You clicked the button on the Docker website.</p>
  </div>
`;
document.body.appendChild(modal);

button.addEventListener("click", () => {
    modal.style.display = "flex";
});

modal.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

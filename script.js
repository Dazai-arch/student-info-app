document.getElementById("showDetailsBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();
  const regNumber = document.getElementById("regInput").value.trim();
  const programme = document.getElementById("programmeInput").value.trim();

  const output = document.getElementById("detailsOutput");

  if (!name || !regNumber || !programme) {
    output.textContent = "Please fill in all fields before showing details.";
    output.classList.add("error");
    return;
  }

  output.classList.remove("error");
  output.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Register Number:</strong> ${regNumber}</p>
    <p><strong>Programme:</strong> ${programme}</p>
  `;
});
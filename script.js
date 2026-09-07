document.getElementById("showDetailsBtn").addEventListener("click", function () {
  const output = document.getElementById("detailsOutput");
  output.textContent = "Details: Mani, Register No. 261, Programme MCA";
  document.getElementById("showDetailsBtn").textContent = "Details Shown";
});
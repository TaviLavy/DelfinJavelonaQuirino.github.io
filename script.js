var popupContainer = document.getElementById("popup-container");
var closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", function() {
  popupContainer.style.display = "none";
});

popupContainer.style.display = "block";

document.getElementById('next-page-button').addEventListener('click', function() {
  window.location.href = 'next.html';
});
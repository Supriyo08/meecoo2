// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
function openModal(image) {
  var modalImg = document.getElementById("fullImage");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = image.src;
  captionText.innerHTML = image.alt;
}

// Close the modal
function closeModal() {
  modal.style.display = "none";
}

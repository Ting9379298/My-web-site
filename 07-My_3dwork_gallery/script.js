var modal = document.getElementsByClassName("image-modal")[0];
var get_all_images = document.getElementsByClassName("images");
var modal_image = document.getElementsByClassName("modal-content")[0];
var close_button = document.getElementsByClassName("close")[0];

for (var i = 0; i < get_all_images.length; i++) {
  var img = get_all_images[i];

  img.onclick = function (evt) {
    console.log(evt);
    modal.style.display = "block";
    modal_image.src = this.src;
  };
}

close_button.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (evt) {
  if (evt.target === modal) {
    modal.style.display = "none";
  }
};

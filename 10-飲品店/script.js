document.addEventListener("DOMContentLoaded", () => {
  function setSquare() {
    const bigSquares = document.querySelectorAll(".big-squa");
    bigSquares.forEach((square) => {
      const get_width = window.getComputedStyle(square).width;
      square.style.height = get_width;
    });

    const smallSquares = document.querySelectorAll(".small-squa");
    smallSquares.forEach((square) => {
      const get_width = window.getComputedStyle(square).width;
      square.style.height = get_width;
    });

    const rectangle = document.querySelector(".rectangle");
    const get_small_squa_width = window.getComputedStyle(smallSquares[0]).width;
    rectangle.style.height = get_small_squa_width;
    // Select .rectangle will return an array, so using smallSquare[0] to target first element.
  }

  setSquare();

  // Update when window resized.
  window.addEventListener("resize", setSquare);

  // image move
  const img = document.querySelector("#move-img");
  let val = window.scrollY;
  window.addEventListener("scroll", () => {
    img.style.bottom = `-${val * 2.5}px`;
  });
});

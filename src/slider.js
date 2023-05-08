Element.prototype.slider = function (data) {
  this.innerHTML = data.sliderContent;

  try {
    let slides = this.querySelectorAll(".slide");
    this.querySelector(".slider_wrapper").style.gap = data.gap + "px";

    let slideWidth =
      (this.clientWidth -
        parseInt(data.gap, 10) * parseInt(data.slidesToShow - 1, 10)) /
        data.slidesToShow +
      "px";
    slides.forEach((slide) => (slide.style.width = slideWidth));

    setInterval(() => {
      let slides = this.querySelectorAll(".slide");
      let firstSlide = slides[0];
      const clone = firstSlide.cloneNode(true);
      this.querySelector(".slider_wrapper").appendChild(clone);
      firstSlide.remove();
    }, 3000);
  } catch {
    console.warn("No images are added yet!");
  }
};

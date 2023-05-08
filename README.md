# my_simple_slider
Created with CodeSandbox

You can see the demo here: https://codesandbox.io/s/github/sona9090/my_simple_slider

This is a simple slider.

How to initialize?
slider.slider(sliderData);
where slider is an element.

sliderData is an object,containing the slider parameters. For example:
let sliderData = {
  sliderContent: sliderContent,
  slidesToShow: 3,
  gap: 15
};

sliderContent - represents the content of a slider. It should contain the .slider-wrapper element.
For example:
let sliderContent = `
  <div class="slider_wrapper">
    ${data
      .map((item, key) => {
        return `
    <a href="${item.link}" class="slide">
      <img src="images_slider/${key + 1}.jpg" />
    </a>
  `;
      })
      .join("\n")}
  </div>
`;

slidesToShow - is the quantity of slides to be displayed, type: Number.
gap - is the gap between the slides in pixels, type: Number.



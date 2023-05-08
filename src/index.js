import "./styles.css";

let data = [
  {
    link: ""
  },
  {
    link: ""
  },
  {
    link: ""
  },
  {
    link: ""
  },
  {
    link: ""
  }
];

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

let slider = document.getElementById("custom_slider");

let sliderData = {
  sliderContent: sliderContent,
  slidesToShow: 3,
  gap: 15
};

slider.slider(sliderData);

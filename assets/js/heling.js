let slide = document.querySelector(".project-slider");
const dots = document.querySelectorAll(".gray-dot");
const urlImage = ['./assets/images/Heling/quart.jpg', './assets/images/Heling/flower-1.jpg', './assets/images/Heling/dining.png', './assets/images/Heling/flower-2.jpg'];

dots.forEach((item, index) => {
    item.addEventListener("click", () => {
        for (let i = 0; i < dots.length; i++) {
            dots[i].style.opacity = "1";
        }
        dots[index].style.opacity = "0";
        console.log("url: ", urlImage[index]);
        // slide.style.backgroundImage = `url(${urlImage[index]})`;
        slide.style.background = `url(${urlImage[index]}) center / cover no-repeat`;

    });
});

let gotoTop = document.querySelector(".arrow-top");
gotoTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

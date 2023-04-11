const svgList = document.querySelectorAll(".pastas a");

const mudarIcone = function () {
  svgList.forEach((svg) => {
    const path = svg.querySelector("path");
    const originalPath = path.getAttribute("d");
    const newPath =
      "M1.39535 14.8837C1.03876 14.8837 0.717054 14.7403 0.430233 14.4535C0.143411 14.1667 0 13.845 0 13.4884V1.39535C0 1.03876 0.143411 0.717054 0.430233 0.430233C0.717054 0.143411 1.03876 0 1.39535 0H7.93023L9.32558 1.39535H17.2093C17.5659 1.39535 17.8876 1.53876 18.1744 1.82558C18.4612 2.1124 18.6047 2.43411 18.6047 2.7907H1.39535V13.4884L3.76744 4.18605H20L17.5116 13.814C17.4186 14.186 17.2481 14.4574 17 14.6279C16.7519 14.7985 16.4341 14.8837 16.0465 14.8837H1.39535Z";
    svg.addEventListener("mouseover", function () {
      path.setAttribute("d", newPath);
    });
    svg.addEventListener("mouseout", function () {
      path.setAttribute("d", originalPath);
    });
  });
};
mudarIcone();

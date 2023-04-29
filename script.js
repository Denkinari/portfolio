const introDiv = document.querySelector(".intro");
setTimeout(() => {
  introDiv.classList.add("hide");
}, 5000);

const ativar = function () {
  const pastas = document.querySelectorAll(".pastas a");
  pastas.forEach((pasta) => {
    pasta.addEventListener("click", function (event) {
      event.preventDefault();
      if (pasta.classList.contains("ativo")) {
        pasta.classList.remove("ativo");
      } else {
        pastas.forEach((pasta) => {
          pasta.classList.remove("ativo");
        });
        pasta.classList.add("ativo");
      }
    });
  });
};
ativar();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion .pastas a");
  function activeAccordion() {
    const accordionConteudo = this.parentElement.nextElementSibling;
    const isActive = accordionConteudo.classList.contains("ativo");
    accordionList.forEach((item) => {
      const conteudo = item.parentElement.nextElementSibling;
      if (
        conteudo !== accordionConteudo &&
        conteudo.classList.contains("ativo")
      ) {
        conteudo.classList.remove("ativo");
      }
    });
    accordionConteudo.classList.toggle("ativo", !isActive);
    this.scrollIntoView({
      behavior: "smooth",
    });
  }
  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}
initAccordion();

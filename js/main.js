import { aplicarMascaras } from "./masks.js";

import {
  configurarCadastro,
  configurarContato
} from "./forms.js";

import {
  configurarTema,
  configurarMenu,
  configurarNavegacao
} from "./interactions.js";

import { Views } from "./views.js";


console.log("main.js funcionando!");


const app = document.querySelector("#app");


function renderizar(pagina) {

  if (!Views[pagina]) {
    pagina = "inicio";
  }

  app.innerHTML = Views[pagina]();

  atualizarMenu(pagina);

  configurarCadastro();
  configurarContato();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function atualizarMenu(pagina) {

  const links = document.querySelectorAll(".nav-menu a");

  links.forEach((link) => {

    link.classList.remove("active");

    if (link.dataset.rota === pagina) {
      link.classList.add("active");
    }

  });
}


function descobrirPagina() {

  const pagina = window.location.hash.replace("#", "");

  return pagina || "inicio";
}


function iniciarAplicacao() {

  configurarTema();

  configurarMenu();

  configurarNavegacao(renderizar);

  aplicarMascaras();

  renderizar(descobrirPagina());

}


iniciarAplicacao();
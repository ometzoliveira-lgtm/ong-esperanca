console.log("interactions.js funcionando!");


export function configurarTema() {

  console.log("configurarTema foi chamada!");

  const botao = document.createElement("button");

  botao.textContent = "🌙";

  botao.classList.add("theme-button");

  document.body.prepend(botao);


  botao.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const modoEscuro =
      document.body.classList.contains("dark-mode");


    botao.textContent =
      modoEscuro ? "☀️" : "🌙";


    localStorage.setItem(
      "tema",
      modoEscuro ? "escuro" : "claro"
    );

  });


  const temaSalvo =
    localStorage.getItem("tema");


  if (temaSalvo === "escuro") {

    document.body.classList.add("dark-mode");

    botao.textContent = "☀️";

  }

}


export function configurarMenu() {

  const botaoMenu =
    document.querySelector(".menu-button");

  const menu =
    document.querySelector(".nav-menu");


  if (!botaoMenu || !menu) return;


  botaoMenu.addEventListener("click", () => {

    menu.classList.toggle("menu-aberto");

  });

}


export function configurarNavegacao(renderizar) {

  document.addEventListener("click", (e) => {

    const link =
      e.target.closest("[data-rota]");


    if (!link) return;


    e.preventDefault();


    const pagina =
      link.dataset.rota;


    window.location.hash = pagina;


    renderizar(pagina);


    const menu =
      document.querySelector(".nav-menu");


    if (menu) {
      menu.classList.remove("menu-aberto");
    }

  });


  window.addEventListener("hashchange", () => {

    const pagina =
      window.location.hash.replace("#", "") || "inicio";


    renderizar(pagina);

  });

}
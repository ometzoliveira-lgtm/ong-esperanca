import { Storage } from "./storage.js";

function mostrarErro(campo, mensagem) {
  campo.classList.add("campo-invalido");

  let erro = campo.parentElement.querySelector(".mensagem-erro");

  if (!erro) {
    erro = document.createElement("small");
    erro.classList.add("mensagem-erro");
    campo.parentElement.appendChild(erro);
  }

  erro.textContent = mensagem;
}

function limparErro(campo) {
  campo.classList.remove("campo-invalido");

  const erro = campo.parentElement.querySelector(".mensagem-erro");

  if (erro) {
    erro.remove();
  }
}

function validarFormulario(form) {
  let formularioValido = true;

  const campos = form.querySelectorAll("input, textarea");

  campos.forEach((campo) => {
    limparErro(campo);

    if (!campo.checkValidity()) {
      formularioValido = false;

      if (campo.validity.valueMissing) {
        mostrarErro(campo, "Este campo é obrigatório.");
      } else if (campo.validity.typeMismatch) {
        mostrarErro(campo, "Digite um e-mail válido.");
      } else if (campo.validity.patternMismatch) {
        mostrarErro(campo, "Digite o valor no formato indicado.");
      } else if (campo.validity.tooLong) {
        mostrarErro(campo, "O valor informado é muito longo.");
      }
    }
  });

  return formularioValido;
}

export function configurarCadastro() {
  const campoNome = document.querySelector("#nome-cad");

  if (!campoNome) return;

  const form = campoNome.closest("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formularioValido = validarFormulario(form);

    if (!formularioValido) {
      const primeiroCampoInvalido = form.querySelector(":invalid");

      if (primeiroCampoInvalido) {
        primeiroCampoInvalido.focus();
      }

      return;
    }

    const dados = {
      nome: document.querySelector("#nome-cad").value,
      email: document.querySelector("#email-cad").value,
      nascimento: document.querySelector("#nascimento").value,
      cep: document.querySelector("#cep").value,
      cidade: document.querySelector("#cidade").value,
      estado: document.querySelector("#estado").value,
      cpf: document.querySelector("#cpf").value,
      telefone: document.querySelector("#telefone").value
    };

    Storage.save("cadastros", dados);

    const status = document.querySelector("#cadastro-status");

    status.textContent = "Cadastro realizado com sucesso!";
    status.style.color = "green";

    form.reset();

    form.querySelectorAll("input").forEach((campo) => {
      limparErro(campo);
    });
  });
}

export function configurarContato() {
  const campoMensagem = document.querySelector("#mensagem");

  if (!campoMensagem) return;

  const form = campoMensagem.closest("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formularioValido = validarFormulario(form);

    if (!formularioValido) {
      const primeiroCampoInvalido = form.querySelector(":invalid");

      if (primeiroCampoInvalido) {
        primeiroCampoInvalido.focus();
      }

      return;
    }

    const dados = {
      nome: document.querySelector("#nome").value,
      email: document.querySelector("#email").value,
      mensagem: document.querySelector("#mensagem").value
    };

    Storage.save("contatos", dados);

    const status = document.querySelector("#mensagem-status");

    status.textContent = "Mensagem enviada com sucesso!";
    status.style.color = "green";

    form.reset();

    form.querySelectorAll("input, textarea").forEach((campo) => {
      limparErro(campo);
    });
  });
}
export function aplicarMascaras() {
  document.addEventListener("input", (e) => {
    const input = e.target;

    if (input.id === "cep") {
      let value = input.value.replace(/\D/g, "");

      if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d)/, "$1-$2");
      }

      input.value = value.slice(0, 9);
    }

    if (input.id === "cpf") {
      let value = input.value.replace(/\D/g, "");

      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

      input.value = value.slice(0, 14);
    }

    if (input.id === "telefone") {
      let value = input.value.replace(/\D/g, "");

      value = value.replace(/^(\d{2})(\d)/, "$1-$2");
      value = value.replace(/(\d{5})(\d)/, "$1-$2");

      input.value = value.slice(0, 13);
    }
  });
}
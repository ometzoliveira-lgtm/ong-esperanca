export const Views = {

  inicio() {
    return `
      <section class="hero-section">

        <h1>
          Bem-vindo à ONG Esperança
        </h1>

        <p>
          Somos uma organização dedicada a transformar vidas
          através de projetos sociais e comunitários.
        </p>

      </section>


      <div class="cards-grid">

        <section class="card-container">

          <span class="badge">
            Projeto Ativo
          </span>

          <img
            src="../img/voluntariado.jpg"
            alt="Voluntários em ação"
            class="card-img"
          >

          <div class="card-content">

            <h2>
              Nossos Projetos
            </h2>

            <p>
              Conheça iniciativas de voluntariado,
              campanhas de doação e programas de
              apoio às famílias.
            </p>

            <a
              href="#projetos"
              data-rota="projetos"
              class="btn-primary"
            >
              Ver detalhes
            </a>

          </div>

        </section>


        <section class="card-container">

          <img
            src="../img/doacao.png"
            alt="Mãos simbolizando doação"
            class="card-img"
          >

          <div class="card-content">

            <h2>
              Como Ajudar
            </h2>

            <p>
              Você pode contribuir como voluntário
              ou através de doações. Cada gesto faz
              a diferença!
            </p>

            <a
              href="#cadastro"
              data-rota="cadastro"
              class="btn-primary"
            >
              Doar
            </a>

          </div>

        </section>

      </div>
    `;
  },


  projetos() {
    return `
      <section class="hero-section">

        <h1>
          Projetos Sociais
        </h1>

        <p>
          Conheça as nossas frentes de atuação
          e como impactamos a nossa comunidade diariamente.
        </p>

      </section>


      <div class="cards-grid">

        <section class="card-container">

          <img
            src="../img/educacao.jpg"
            alt="Crianças estudando em sala de aula"
            class="card-img"
          >

          <div class="card-content">

            <h2>
              Educação para Todos
            </h2>

            <p>
              Oferecemos cursos gratuitos para crianças
              e jovens em situação de vulnerabilidade.
            </p>

          </div>

        </section>


        <section class="card-container">

          <img
            src="../img/saude.jpg"
            alt="Equipe médica atendendo comunidade"
            class="card-img"
          >

          <div class="card-content">

            <h2>
              Saúde Comunitária
            </h2>

            <p>
              Campanhas de vacinação e atendimento médico
              básico em comunidades carentes.
            </p>

          </div>

        </section>


        <section class="card-container">

          <img
            src="../img/sustentabilidade.jpg"
            alt="Horta comunitária com voluntários"
            class="card-img"
          >

          <div class="card-content">

            <h2>
              Sustentabilidade
            </h2>

            <p>
              Projetos de reciclagem e hortas comunitárias
              para promover consciência ambiental.
            </p>

          </div>

        </section>

      </div>
    `;
  },


  contato() {
    return `
      <section class="hero-section">

        <h1>
          Fale Conosco
        </h1>

        <p>
          Dúvidas, sugestões ou quer se tornar um parceiro?
          Envie uma mensagem!
        </p>

      </section>


      <section class="form-container">

        <form class="custom-form" novalidate>

          <div class="form-group">

            <label for="nome">
              Nome:
            </label>

            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome completo"
              required
            >

          </div>


          <div class="form-group">

            <label for="email">
              E-mail:
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="seuemail@exemplo.com"
              required
            >

          </div>


          <div class="form-group">

            <label for="mensagem">
              Mensagem:
            </label>

            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              placeholder="Escreva sua mensagem aqui..."
              required
            ></textarea>

          </div>


          <button
            type="submit"
            class="btn-primary"
          >
            Enviar Mensagem
          </button>


          <p id="mensagem-status"></p>

        </form>

      </section>
    `;
  },


  cadastro() {
    return `
      <section class="hero-section">

        <h1>
          Formulário de Cadastro
        </h1>

        <p>
          Cadastre-se para participar dos nossos
          programas ou atuar como voluntário.
        </p>

      </section>


      <section class="form-container">

        <form class="custom-form" novalidate>

          <fieldset>

            <legend>
              Dados Pessoais
            </legend>


            <div class="form-group">

              <label for="nome-cad">
                Nome Completo:
              </label>

              <input
                type="text"
                id="nome-cad"
                required
                placeholder="Ex: Maria Silva"
              >

            </div>


            <div class="form-group">

              <label for="email-cad">
                E-mail:
              </label>

              <input
                type="email"
                id="email-cad"
                required
                placeholder="maria@email.com"
              >

            </div>


            <div class="form-group">

              <label for="nascimento">
                Data de Nascimento:
              </label>

              <input
                type="date"
                id="nascimento"
                required
              >

            </div>

          </fieldset>


          <fieldset>

            <legend>
              Endereço
            </legend>


            <div class="form-group">

              <label for="cep">
                CEP:
              </label>

              <input
                type="text"
                id="cep"
                pattern="[0-9]{5}-[0-9]{3}"
                required
                placeholder="00000-000"
              >

            </div>


            <div class="form-row">

              <div class="form-group flex-2">

                <label for="cidade">
                  Cidade:
                </label>

                <input
                  type="text"
                  id="cidade"
                  required
                  placeholder="Sua cidade"
                >

              </div>


              <div class="form-group flex-1">

                <label for="estado">
                  Estado (UF):
                </label>

                <input
                  type="text"
                  id="estado"
                  maxlength="2"
                  required
                  placeholder="SP"
                >

              </div>

            </div>

          </fieldset>


          <fieldset>

            <legend>
              Documentos e Contato
            </legend>


            <div class="form-group">

              <label for="cpf">
                CPF:
              </label>

              <input
                type="text"
                id="cpf"
                pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                required
                placeholder="000.000.000-00"
              >

            </div>


            <div class="form-group">

              <label for="telefone">
                Telefone:
              </label>

              <input
                type="tel"
                id="telefone"
                pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                required
                placeholder="11-99999-9999"
              >

            </div>

          </fieldset>


          <button
            type="submit"
            class="btn-primary"
          >
            Finalizar Cadastro
          </button>


          <p id="cadastro-status"></p>

        </form>

      </section>
    `;
  }

};
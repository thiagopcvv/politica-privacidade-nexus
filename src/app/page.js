import Image from "next/image";

export default function Home() {
  return (
    <body>
      <header>
        <div className="container">
          <div id="img-box">
            <img src="./nexus.png" alt="Nexus Icone imagem" id="genpro" />
          </div>
          <div id="headerbox">
            <div id="titulo-header">
              <h1>Nexus Ponto</h1>
              <h2>Política de Privacidade</h2>
            </div>
          </div>
          <div id="ghost-box"></div>
        </div>
      </header>
      <div id="divisor"></div>
      <div className="container">
        <section>
          <h2>Política Privacidade</h2>
          <p>
            É política da
            <strong> Gênesis Tecnologia e Inovação </strong>respeitar a sua
            privacidade em relação a qualquer informação sua que possamos
            coletar em nosso aplicativo
            <a href="https://play.google.com/store/apps/details?id=br.com.e2ti.portaldoprofessor">
              {" "}
              Nexus Ponto
            </a>
            , e outros softwares e aplicativos que possuímos e operamos.
          </p>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos
            por que estamos coletando e como será usado.
          </p>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados, protegemos
            dentro de meios comercialmente aceitáveis ​​para evitar perdas e
            roubos, bem como acesso, divulgação, cópia, uso ou modificações não
            autorizadas.
          </p>
          A sua privacidade é importante para nós.
          <p>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei.
          </p>
          <p>
            O nosso App pode ter links para sites externos que não são operados
            por nós. Esteja ciente de que não temos controle sobre o conteúdo e
            práticas desses sites e não podemos aceitar responsabilidade por
            suas respectivas políticas de privacidade.
          </p>
          <p>
            Você é livre para recusar a nossa solicitação de informações
            pessoais, entendendo que talvez não possamos fornecer alguns dos
            serviços desejados.
          </p>
          <p>
            O uso contínuo de nossa aplicação será considerado como aceita as
            nossas práticas em torno de privacidade e informações pessoais. Se
            você tiver alguma dúvida sobre como lidamos com dados do usuário e
            informações pessoais, entre em contato conosco.
          </p>
          <h3>Compromisso do Usuário</h3>
          <p>
            O usuário se compromete a fazer uso adequado dos conteúdos e da
            informação que o Nexus Ponto oferece no aplicativo e com caráter
            enunciativo, mas não limitativo:
          </p>
          <ul>
            <li>
              A- Não se envolver em atividades que sejam ilegais ou contrárias à
              boa fé a à ordem pública;
            </li>
            <li>
              B- Não difundir propaganda ou conteúdo de natureza racista ou
              xenofóbica;
            </li>
            <li>
              C- Não causar danos aos sistemas físicos (hardwares) e lógicos
              (softwares) no Aplicativo Nexus Ponto, de seus fornecedores ou
              terceiros, para introduzir ou disseminar vírus informáticos ou
              quaisquer outros sistemas de hardware ou software que sejam
              capazes de causar danos anteriormente mencionados.
            </li>
          </ul>
          <p></p>
          <h3>Mais informações</h3>
          <p>
            Se houver algo que você não tem certeza se precisa ou não, entre em
            contato com nossa equipe. Estamos a disposição para esclarecer:
          </p>
          <p>
            Mais informações no site:
            <a href="https://www.genesis.tec.br/" target="_blank">
              Gênesis Tecnologia e Inovação
            </a>
          </p>
          <p>
            Email:
            <a href="mailto:suporte@genesis.tec.br">suporte@genesis.tec.br</a>
          </p>
        </section>
      </div>

      <footer>
        <div id="rodape-text">
          <h4>
            © Gênesis Tecnologia e Inovação - Todos os direitos reservados
          </h4>
        </div>
      </footer>
    </body>
  );
}

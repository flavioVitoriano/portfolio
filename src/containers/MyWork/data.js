import login from "../../assets/works/eletivaspro/login.png";
import tela1 from "../../assets/works/eletivaspro/tela01.png";
import tela2 from "../../assets/works/eletivaspro/tela02.png";
import tela3 from "../../assets/works/eletivaspro/tela03.png";
import tela4 from "../../assets/works/eletivaspro/tela04.png";
import sige1 from "../../assets/works/sige/cliente_list.png";
import sige2 from "../../assets/works/sige/cliente_create.png";
import sige3 from "../../assets/works/sige/orcamento_entrada.png";
import sige4 from "../../assets/works/sige/produto_create.png";


const works = [
  {
    title: "Eletivas PRO",
    thumbnail: tela1,
    description:
      "Meu primeiro sistema feito com alguma utilidade real, fiz ele como um projeto na escola, mas acabou sendo algo bastante útil por lá. Esse sistema foi feito com o intuito de facilitar o cadastro das eletivas com os alunos, simplificando os registros, cadastro de eletivas e geração de relatórios",
    used: ["Django", "Django-rest-framework", "jquery", "sqlite3"],
      items: [
      {
        src: login,
        altText: "login page",
        caption: "Login",
        header: "",
        key: "1",
      },
      {
        src: tela1,
        altText: "tela01",
        caption: "Home",
        header: "",
        key: "2",
      },
      {
        src: tela2,
        altText: "tela02",
        caption: "Home",
        header: "",
        key: "3",
      },
      {
        src: tela3,
        altText: "tela03",
        caption: "Tela 3",
        header: "",
        key: "4",
      },
      {
        src: tela4,
        altText: "tela04",
        caption: "Tela 4",
        header: "",
        key: "5",
      },
    ],
  },
  {
    title: "F WEB SIGE",
    thumbnail: sige1,
    description: "Um sige web focado para empresas automobilísticas, feito com as funções básicas de um SIGE, com os módulos de cadastro, entrada, saídas e relatórios. Melhorias estão em progresso",
    used: ["Django", "Django-rest-framework", "react", "reactjs", "postgresql", "mobx", "material ui", "selenium"],
      items: [
      {
        src: sige1,
        altText: "sige01",
        caption: "Lista de clientes",
        header: "",
        key: "1",
      },
      {
        src: sige2,
        altText: "sige02",
        caption: "Criação de clientes",
        header: "",
        key: "2",
      },
      {
        src: sige3,
        altText: "sige03",
        caption: "Criação de orçamentos",
        header: "",
        key: "3",
      },
      {
        src: sige4,
        altText: "sige04",
        caption: "Criação de produtos",
        header: "",
        key: "4",
      },
    ],
  },
];

export default works;

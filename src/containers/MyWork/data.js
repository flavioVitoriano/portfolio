import login from "../../assets/works/eletivaspro/login.png";
import tela1 from "../../assets/works/eletivaspro/tela01.png";
import tela2 from "../../assets/works/eletivaspro/tela02.png";
import tela3 from "../../assets/works/eletivaspro/tela03.png";
import tela4 from "../../assets/works/eletivaspro/tela04.png";
import sige1 from "../../assets/works/sige/cliente_list.png";
import sige2 from "../../assets/works/sige/cliente_create.png";
import sige3 from "../../assets/works/sige/orcamento_entrada.png";
import sige4 from "../../assets/works/sige/produto_create.png";
import live1 from "../../assets/works/live-reports/usuarios.png";
import live2 from "../../assets/works/live-reports/organizacao.png";
import live3 from "../../assets/works/live-reports/importacao.png";

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
        caption: "pagina de Login",
        header: "Login",
        key: "1",
      },
      {
        src: tela1,
        altText: "tela01",
        caption: "Contém informações úteis ao gestor",
        header: "Home",
        key: "2",
      },
      {
        src: tela2,
        altText: "tela02",
        caption: "Pagina relacionada a alunos (CRUD)",
        header: "Alunos",
        key: "3",
      },
      {
        src: tela3,
        altText: "tela03",
        caption: "Mostra as eletivas disponíveis",
        header: "Eletivas",
        key: "4",
      },
      {
        src: tela4,
        altText: "tela04",
        caption: "Página relacionanda a relatórios",
        header: "Gestão",
        key: "5",
      },
    ],
  },
  {
    title: "F WEB SIGE",
    thumbnail: sige1,
    description: "Um sige web focado para empresas automobilísticas, feito com as funções básicas de um SIGE, com os módulos de cadastro, entrada, saídas e relatórios. Melhorias estão em progresso",
    used: ["Django", "Django-rest-framework", "react", "reactjs", "postgresql", "mobx", "material ui", "selenium", "plop"],
      items: [
      {
        src: sige1,
        altText: "sige01",
        caption: "Lista de clientes",
        header: "Clientes",
        key: "1",
      },
      {
        src: sige2,
        altText: "sige02",
        caption: "Criação de clientes",
        header: "Clientes",
        key: "2",
      },
      {
        src: sige3,
        altText: "sige03",
        caption: "Criação de orçamentos",
        header: "Orçamentos",
        key: "3",
      },
      {
        src: sige4,
        altText: "sige04",
        caption: "Criação de produtos",
        header: "Produtos",
        key: "4",
      },
    ],
  },
  {
    title: "Live Reports",
    thumbnail: live1,
    description: "Sistema SAAS feito para processar e informar o fluxo de trabalho em empresas que usam relógios de ponto. Foi o primeiro app ao qual participei que inclui um sistema de permissões complexo, com grupos e permissões individuais e coletivas." ,
    used: ["Java", "spring boot", "react", "reactjs", "mysql", "redux", "redux sagas", "intl", "plop"],
      items: [
      {
        src: live1,
        altText: "live01",
        caption: "Página de CRUD de usuários",
        header: "Usuários",
        key: "1",
      },
      {
        src: live2,
        altText: "live02",
        caption: "Modifica as regras da organização do usuário",
        header: "Organizações",
        key: "2",
      },
      {
        src: live3,
        altText: "live03",
        header: "Importações",
        caption: "Página ao qual se realiza as importações dos dados",
        key: "3",
      },
    ],
  },
];

export default works;

import login from "../../assets/works/eletivaspro/login.png";
import tela1 from "../../assets/works/eletivaspro/tela01.png";
import tela2 from "../../assets/works/eletivaspro/tela02.png";
import tela3 from "../../assets/works/eletivaspro/tela03.png";
import tela4 from "../../assets/works/eletivaspro/tela04.png";


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
];

export default works;

import type { ProjectModel } from "../types/project";

export const projectsList: ProjectModel[] = [
  {
    title: "Online Shopping Cart",
    description:
      "E-commerce website with products list and item pages, infinite scroll, interactive shopping cart, checkout, login with Google.",
    technologies:
      "Next.js, Typescript, Tailwindcss, Zustand, React-query, Axios, Next-Auth",
    img: "/assets/ecommerce.png",
    githubRepo: "https://github.com/Jhessiny/next-eccomerce",
    deployLink: "https://next-eccomerce-gules.vercel.app/products",
  },
  {
    title: "Quiz Dash",
    description:
      "Dashboard to manage quizzes and contacts. The admin can create quizzes to gather leads and send it to platforms like Active Campaign.",
    technologies: "React.js, Typescript, TSS, Axios",
    img: "/assets/dashboard.png",
    githubRepo: "https://github.com/Jhessiny/quiz-dash",
    deployLink:
      "http://quiz-dash-test.s3-website-us-east-1.amazonaws.com/admin",
  },
  {
    title: "Fernandes Coutinho Advogados",
    description:
      "Landing page to present lawyer services and receive contacts.",
    technologies: "Html, css, Javascript",
    img: "/assets/fernandes-neto.png",
    githubRepo:
      "https://github.com/Jhessiny/jhessiny.github.io/tree/master/FernandesNeto2",
    deployLink: "https://jhessiny.github.io/FernandesNeto2/",
  },
  {
    title: "Kraftsoft",
    description: "Landing page for digital agency",
    technologies: "Next.js, Typescript, Tailwindcss, Zustand, Axios",
    img: "/assets/kraftsoft.png",
    githubRepo: "https://github.com/Jhessiny/kraftsoft-digital-agency",
    deployLink: "https://jhessiny.github.io/kraftsoft-digital-agency/",
  },
];

import PlaceholderImg from "../../../public/placeholder_img.png";
import AppErp from "../../../public/ex_erp.png";
import VendingMachine from "../../../public/ex_vending-machine.png";
import AppAgennda from "../../../public/ex_agennda.png";

export const listProjects = [
  {
    id: "1",
    title: "ERP - PCP",
    cover: AppErp.src,
    github: "",
    shortDescription: "Sistema ERP para gestão de PCP",
    description:
      "Sistema ERP para gestão de pcp, sistema modular que atende a demanda industrial quanto à gestão integral, produtos/matéria prima, ordens de serviço, fluxo de vendas, produção e entrega, apontamentos automatizados.",
  },

  {
    id: "2",
    title: "Vending Machine",
    cover: VendingMachine.src,
    github: "",
    shortDescription:
      "Sistema para máquina de venda de medalhas comemorativas automatizado",
    description:
      "Sistema desenvolvido para 'vending machine' integrado com automação arduino para despenser dos itens e com meios de pagemento integrados com pin-pad.",
  },

  {
    id: "3",
    title: "agennda",
    cover: AppAgennda.src,
    github: "",
    shortDescription: "Aplicativo 'agennda'",
    description:
      "O app 'agennda' é voltado para organização de agendas de negócios como salões de beleza, estética pessoal/automotiva e outros, conta com cadastramento de clientes, funcionários, serviços, agenda automatizada com integração de pagamento antecipado dos serviços agendados ou realizados.",
  },

  {
    id: "4",
    title: "Project 4",
    cover: PlaceholderImg.src,
    github: "project.github",
    shortDescription: "Project 4",
    description: "Project 4",
  },

  {
    id: "5",
    title: "Project 5",
    cover: PlaceholderImg.src,
    github: "project.github",
    shortDescription: "Project 5",
    description: "Project 5",
  },
];

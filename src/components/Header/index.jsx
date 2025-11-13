import * as S from "./styles";
import { Menu, MenuHamburgerHeader } from "../../components";
import logoHivetron from "../../../public/logo-hivetron.png";

export function Header() {
  const menuOptions = [
    { label: "Sobre", id: "about-section" },
    { label: "Serviços", id: "services-section" },
    { label: "Devs", id: "devs-section" },
    { label: "Tecnologias", id: "techs-section" },
    { label: "Projetos", id: "projects-section" },
    { label: "Contato", id: "contact-section" },
  ];

  return (
    <S.Container>
      <S.Logo src={logoHivetron.src} alt="logo-hivetron" />
      <div className="LG">
        <Menu />
      </div>
      <div className="SM">
        <MenuHamburgerHeader options={menuOptions} />
      </div>
    </S.Container>
  );
}

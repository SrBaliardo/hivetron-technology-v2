import * as S from "./styles";
import { ShinyText } from "../../components";
import { tagsMenu } from "./tags-menu";

export function Menu() {
  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <S.Container>
      <S.MenuItens>
        {tagsMenu.map((item) => {
          const isContact = item.label === "CONTATO";

          return (
            <S.MenuLink
              key={item.id}
              $isContact={isContact}
              onClick={() => handleClick(item.id)}
            >
              {item.label === "CONTATO" ? (
                <ShinyText
                  text="CONTATO"
                  disabled={false}
                  speed={3}
                  className="custom-class menu-link"
                />
              ) : (
                item.label
              )}
            </S.MenuLink>
          );
        })}
      </S.MenuItens>
    </S.Container>
  );
}

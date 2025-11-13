import { useState } from "react";
import * as S from "./styles";

export function MenuHamburgerBody({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <S.MenuContainer>
      <S.Hamburger $isOpen={isOpen} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </S.Hamburger>
      {isOpen && (
        <S.MenuList>
          {options.map((option, index) => (
            <S.MenuItem
              key={index}
              $isOpen={isOpen}
              $delay={index * 0.1}
              onClick={() => handleOptionClick(option.id)}
            >
              {option.label}
            </S.MenuItem>
          ))}
        </S.MenuList>
      )}
    </S.MenuContainer>
  );
}

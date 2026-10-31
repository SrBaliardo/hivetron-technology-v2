import { useEffect, useRef, useState } from "react";
import { Brand } from "@/components/Brand";
import { Icon } from "@/components/Icon";
import { navigation } from "@/content/site";
import * as S from "./styles";

export function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  const root = useRef(null);
  useEffect(() => {
    if (!open) return;
    const escape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    const outside = (event) => {
      if (!root.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = (event) => {
      if (event.matches) setOpen(false);
    };
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);
  const navigate = (event, id) => {
    setOpen(false);
    if (!event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey)
      document.getElementById(id)?.focus({ preventScroll: true });
  };
  return (
    <S.Root ref={root}>
      <S.Skip href="#main">Pular para o conteúdo</S.Skip>
      <S.Inner>
        <a
          href="#top"
          aria-label="Hivetron Technology — início"
          onClick={(event) => navigate(event, "top")}
        >
          <Brand />
        </a>
        <S.Toggle
          ref={button}
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Fechar" : "Menu"}</span>
          <S.Bars $open={open}>
            <span />
            <span />
          </S.Bars>
        </S.Toggle>
        <S.Nav
          id="primary-navigation"
          aria-label="Navegação principal"
          $open={open}
          onBlur={(event) => {
            if (!root.current?.contains(event.relatedTarget)) setOpen(false);
          }}
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => navigate(event, item.id)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="contact"
            href="#contact-section"
            onClick={(event) => navigate(event, "contact-section")}
          >
            Vamos conversar <Icon name="diagonal" size={16} />
          </a>
        </S.Nav>
      </S.Inner>
    </S.Root>
  );
}

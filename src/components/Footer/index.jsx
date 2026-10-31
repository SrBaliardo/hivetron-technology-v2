import { Brand } from "@/components/Brand";
import { Icon } from "@/components/Icon";
import { site } from "@/content/site";
import * as P from "@/styles/primitives";
import * as S from "./styles";

export function Footer() {
  return (
    <S.Root>
      <P.Container>
        <S.Top>
          <a href="#top" aria-label="Hivetron Technology — voltar ao início">
            <Brand />
          </a>
          <p>
            Construímos software.
            <br />
            Conectamos possibilidades.
          </p>
          <a href="#top">
            Voltar ao topo <Icon name="diagonal" size={16} />
          </a>
        </S.Top>
        <S.Bottom>
          <p>© {new Date().getFullYear()} Hivetron Technology.</p>
          <span>Feito por gente que gosta de construir.</span>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            Hivetron no GitHub <Icon name="diagonal" size={14} />
          </a>
        </S.Bottom>
      </P.Container>
    </S.Root>
  );
}

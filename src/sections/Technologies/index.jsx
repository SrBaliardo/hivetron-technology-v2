import { technologies } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import * as P from "@/styles/primitives";
import * as S from "./styles";

export function Technologies() {
  return (
    <S.Root id="techs-section" tabIndex={-1} aria-labelledby="techs-title">
      <P.Container>
        <Reveal>
          <S.Top>
            <h2 id="techs-title">A ferramenta certa para cada desafio.</h2>
            <p>Uma parte da nossa caixa de ferramentas.</p>
          </S.Top>
          <S.List>
            {technologies.map((tech) => (
              <li key={tech.name}>
                <strong>{tech.name}</strong>
                <span>{tech.category}</span>
              </li>
            ))}
          </S.List>
        </Reveal>
      </P.Container>
    </S.Root>
  );
}

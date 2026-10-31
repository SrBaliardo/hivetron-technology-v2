import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { team } from "@/content/team";
import * as P from "@/styles/primitives";
import * as S from "./styles";

export function Team() {
  return (
    <S.Root id="devs-section" tabIndex={-1} aria-labelledby="team-title">
      <P.Container>
        <Reveal>
          <P.Eyebrow>QUEM FAZ ACONTECER</P.Eyebrow>
          <P.Heading id="team-title">
            Tem gente de verdade
            <br />
            por trás do código.
          </P.Heading>
          <P.Intro>
            Experiências diferentes, uma vontade em comum: construir soluções
            que façam sentido para quem usa.
          </P.Intro>
        </Reveal>
        <S.Grid>
          {team.map((person) => (
            <Reveal key={person.id}>
              <S.Card>
                <S.Portrait>
                  <Image
                    src={`/images/${person.id}-320.webp`}
                    width={160}
                    height={160}
                    alt={`Retrato de ${person.name}`}
                    sizes="160px"
                    loading="lazy"
                  />
                </S.Portrait>
                <div>
                  <S.Role>{person.role}</S.Role>
                  <h3>{person.name}</h3>
                  <p>{person.description}</p>
                  <S.Socials>
                    <a
                      href={person.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub de ${person.name}`}
                    >
                      GitHub <Icon name="diagonal" size={14} />
                    </a>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${person.name}`}
                    >
                      LinkedIn <Icon name="diagonal" size={14} />
                    </a>
                  </S.Socials>
                </div>
              </S.Card>
            </Reveal>
          ))}
        </S.Grid>
      </P.Container>
    </S.Root>
  );
}

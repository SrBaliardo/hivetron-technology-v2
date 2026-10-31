import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/content/projects";
import * as P from "@/styles/primitives";
import * as S from "./styles";

export function Projects() {
  return (
    <S.Root
      id="projects-section"
      tabIndex={-1}
      aria-labelledby="projects-title"
    >
      <P.Container>
        <Reveal>
          <P.Eyebrow>DO CÓDIGO PARA A PRÁTICA</P.Eyebrow>
          <S.HeadingRow>
            <P.Heading id="projects-title">
              Projetos nossos.
              <br />
              Possibilidades suas.
            </P.Heading>
            <p>Um pouco do que construímos em gestão e autoatendimento.</p>
          </S.HeadingRow>
        </Reveal>
        <S.Grid>
          {projects.map((project) => (
            <Reveal key={project.id}>
              <S.Card aria-labelledby={`${project.id}-title`}>
                <S.CardTop>
                  <span>{project.category}</span>
                  <span>{project.number} ↗</span>
                </S.CardTop>
                <S.ProjectName>{project.name}</S.ProjectName>
                <h3 id={`${project.id}-title`}>{project.title}</h3>
                <S.CaseStudy>
                  <div>
                    <dt>O contexto</dt>
                    <dd>{project.context}</dd>
                  </div>
                  <div>
                    <dt>O desafio</dt>
                    <dd>{project.challenge}</dd>
                  </div>
                  <div>
                    <dt>A solução</dt>
                    <dd>{project.solution}</dd>
                  </div>
                </S.CaseStudy>
                <S.Scope>{project.scope}</S.Scope>
                {project.demo && (
                  <S.Demo
                    role="group"
                    aria-label={`Demonstração do ${project.name}`}
                  >
                    <strong>{project.demo.title}</strong>
                    <p>{project.demo.description}</p>
                    <S.DemoLink
                      href={project.demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Testar demonstração
                      <span className="sr-only">
                        {" "}
                        do {project.name} (abre em nova aba)
                      </span>
                      <Icon name="diagonal" size={17} />
                    </S.DemoLink>
                    {project.demo.access && (
                      <small>{project.demo.access}</small>
                    )}
                  </S.Demo>
                )}
                <S.ProjectLink href="#contact-section">
                  Conversar sobre {project.name} <Icon name="arrow" size={17} />
                </S.ProjectLink>
              </S.Card>
            </Reveal>
          ))}
        </S.Grid>
        <S.Privacy>
          <Icon name="layers" size={21} />
          <p>
            <strong>Nem todo projeto pode virar vitrine.</strong> Parte do nosso
            trabalho é privada. Por aqui, mostramos produtos próprios e
            capacidades gerais, preservando as informações de cada cliente.
          </p>
        </S.Privacy>
      </P.Container>
    </S.Root>
  );
}

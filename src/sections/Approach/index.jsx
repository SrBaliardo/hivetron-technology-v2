import { Reveal } from "@/components/Reveal";
import * as P from "@/styles/primitives";
import * as S from "./styles";

const steps = [
  {
    number: "01",
    title: "Primeiro, a conversa.",
    text: "Entender a rotina, o problema e o que precisa mudar. O ponto de partida é o seu contexto.",
  },
  {
    number: "02",
    title: "Depois, o caminho.",
    text: "Organizar prioridades, desenhar a solução e alinhar o escopo antes de colocar a mão no código.",
  },
  {
    number: "03",
    title: "Construir, juntos.",
    text: "Desenvolver com espaço para acompanhar, testar e ajustar a experiência ao longo do projeto.",
  },
  {
    number: "04",
    title: "E seguir evoluindo.",
    text: "Preparar a entrega e conversar sobre os próximos passos conforme as necessidades do negócio.",
  },
];

export function Approach() {
  return (
    <P.Section
      id="about-section"
      tabIndex={-1}
      aria-labelledby="approach-title"
    >
      <P.Container>
        <S.Layout>
          <Reveal>
            <P.Eyebrow>NOSSO JEITO</P.Eyebrow>
            <P.Heading id="approach-title">
              Próximos na conversa.
              <br />
              Cuidadosos na entrega.
            </P.Heading>
            <P.Intro>
              Somos uma rede de desenvolvedores que gosta de entender o problema
              antes de escolher a ferramenta. Menos complicação na conversa,
              mais clareza no que vamos construir.
            </P.Intro>
            <S.Signature>
              Construir. Conectar. Entregar.
              <span>É assim que a colmeia trabalha.</span>
            </S.Signature>
          </Reveal>
          <S.Steps>
            {steps.map((step) => (
              <li key={step.number}>
                <Reveal>
                  <S.Step>
                    <span>{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </S.Step>
                </Reveal>
              </li>
            ))}
          </S.Steps>
        </S.Layout>
      </P.Container>
    </P.Section>
  );
}

import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/services";
import * as P from "@/styles/primitives";
import * as S from "./styles";

export function Services() {
  return (
    <P.Section
      id="services-section"
      tabIndex={-1}
      aria-labelledby="services-title"
    >
      <P.Container>
        <Reveal>
          <P.Eyebrow>O QUE FAZEMOS</P.Eyebrow>
          <S.HeadingRow>
            <P.Heading id="services-title">
              Cada desafio pede
              <br />
              um jeito de construir.
            </P.Heading>
            <P.Intro>
              Seu negócio tem particularidades.
              <br />O software também pode ter.
            </P.Intro>
          </S.HeadingRow>
        </Reveal>
        <S.Grid>
          {services.map((service) => (
            <Reveal key={service.number}>
              <S.Card>
                <S.CardTop>
                  <Icon name={service.icon} size={32} />
                  <span>{service.number}</span>
                </S.CardTop>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <P.Tags>
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </P.Tags>
                <S.Link href="#contact-section">
                  Vamos construir? <Icon name="diagonal" size={17} />
                  <span className="sr-only"> — {service.title}</span>
                </S.Link>
              </S.Card>
            </Reveal>
          ))}
        </S.Grid>
      </P.Container>
    </P.Section>
  );
}

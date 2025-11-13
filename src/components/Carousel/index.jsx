import * as S from "./styles";
import slide1 from "../../../public/slide1.png";
import slide2 from "../../../public/slide2.png";
import slide3 from "../../../public/slide3.png";
import slide4 from "../../../public/slide4.png";

export function Carousel() {
  return (
    <S.Container>
      <S.CustomCarousel autoplay autoplaySpeed={7000}>
        <S.Content>
          <div>
            <h2>Desenvolvimento de Software Personalizado</h2>
            <S.SlideImage src={slide1.src} alt="garoto-olhando-codigo" />
            <p>
              Criamos soluções sob medida para o seu negócio, garantindo que
              cada sistema seja projetado para atender às suas demandas
              específicas. Do planejamento à entrega, desenvolvemos aplicações
              robustas e escaláveis que impulsionam a sua empresa.
            </p>
          </div>
        </S.Content>
        <S.Content>
          <div>
            <h2>Implantação de Sistemas de Automação</h2>
            <S.SlideImage
              src={slide2.src}
              alt="contato-mão-robotica-e-humana"
            />
            <p>
              Otimize processos, reduza custos e aumente a eficiência com nossas
              soluções de automação. Integramos e configuramos sistemas que
              facilitam o gerenciamento e potencializam os resultados da sua
              operação.
            </p>
          </div>
        </S.Content>
        <S.Content>
          <div>
            <h2>Design e Otimização de Sites e Landing Pages</h2>
            <S.SlideImage src={slide3.src} alt="laptop-na-mesa" />
            <p>
              Destaque sua presença online com sites e landing pages modernos,
              funcionais e otimizados para conversão. Nosso time combina design
              criativo com as melhores práticas de SEO para garantir que sua
              marca tenha impacto na web.
            </p>
          </div>
        </S.Content>
        <S.Content>
          <div>
            <h2>Consultoria em Transformação Digital</h2>
            <S.SlideImage src={slide4.src} alt="-celular-com-hello-na-tela" />
            <p>
              Prepare sua empresa para o futuro com nossas consultorias
              estratégicas. Ajudamos você a implementar as melhores tecnologias
              e práticas para digitalizar processos, modernizar operações e
              alcançar novos níveis de produtividade.
            </p>
          </div>
        </S.Content>
      </S.CustomCarousel>
    </S.Container>
  );
}

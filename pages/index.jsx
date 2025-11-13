import { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import * as S from "../src/styles/homeStyles";
import {
  Header,
  Carousel,
  StaffCard,
  Projects,
  Footer,
} from "../src/components";
import { useInView } from "../src/utils/useInView";
import {
  WhatsAppOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import faceImg from "../public/facesection-bg-2.png";
import aboutImg from "../public/tech-img.png";
import intersectionFooterBg from "../public/background-footer.png";
import teamBee from "../public/hivetronBeees.png";

const DynamicMenuHamburgerBody = dynamic(
  () =>
    import("../src/components/MenuHamburgerBody/index.jsx").then(
      (mod) => mod.MenuHamburgerBody
    ),
  { ssr: false }
);

export default function Home() {
  const [currentTech, setCurrentTech] = useState("");
  const [aboutRef, aboutVisible] = useInView();
  const [servicesRef, servicesVisible] = useInView();
  const [devsRef, devsVisible] = useInView();
  const [techsRef, techsVisible] = useInView();
  const [projectsRef, projectsVisible] = useInView();
  const [contactRef, contactVisible] = useInView();

  const technologies = [
    { id: 1, icon: "devicon-java-plain", description: "Java" },
    { id: 2, icon: "devicon-spring-original", description: "Spring" },
    { id: 3, icon: "devicon-docker-plain", description: "Docker" },
    { id: 4, icon: "devicon-react-original", description: "React" },
    { id: 5, icon: "devicon-nextjs-plain", description: "Next" },
    { id: 6, icon: "devicon-javascript-plain", description: "JavaScript" },
    { id: 7, icon: "devicon-typescript-plain", description: "TypeScript" },
    { id: 8, icon: "devicon-html5-plain", description: "HTML" },
    { id: 9, icon: "devicon-css3-plain", description: "CSS" },
    // { id: 10, icon: "devicon-figma-plain", description: "Figma" },
  ];

  const menuOptions = [
    { label: "Voltar ao topo", id: "top" },
    { label: "Sobre", id: "about-section" },
    { label: "Serviços", id: "services-section" },
    { label: "Devs", id: "devs-section" },
    { label: "Tecnologias", id: "techs-section" },
    { label: "Projetos", id: "projects-section" },
    { label: "Contato", id: "contact-section" },
  ];

  return (
    <S.Container>
      <Head>
        <title>HIVETRON Technology - Soluções de Software</title>
      </Head>

      <Header />
      <S.ContainerContent id="top">
        <S.FaceSection>
          <S.FaceSectionImg src={faceImg.src} alt="hivetron-technology" />
        </S.FaceSection>

        <DynamicMenuHamburgerBody options={menuOptions} />

        <S.AboutSection
          id="about-section"
          ref={aboutRef}
          className={aboutVisible ? "visible" : ""}
        >
          <div className="sect">
            <S.AboutSectionImg src={aboutImg.src} alt="hivetron-technology" />
            <div>
              <S.Text>
                Somos uma rede dinâmica de desenvolvedores especializados,
                unidos para transformar ideias em soluções personalizadas e
                inovadoras.
              </S.Text>
              <S.Text>
                Nosso objetivo é simplificar a complexidade do desenvolvimento
                de software, oferecendo projetos sob medida para atender às
                necessidades únicas de cada cliente. <br />
                Com uma equipe diversificada de especialistas, garantimos
                soluções que são tanto funcionais quanto escaláveis.
              </S.Text>
              <S.Text>
                Seja para startups que estão começando ou empresas consolidadas
                que buscam inovação, a Hivetron está aqui para construir,
                conectar e entregar.
              </S.Text>
            </div>
          </div>
        </S.AboutSection>

        <S.ServicesSection
          id="services-section"
          ref={servicesRef}
          className={servicesVisible ? "visible" : ""}
        >
          <S.HeaderSection>
            <div className="div-T">
              <S.ServiceIcon alt="service-icon" />
              <S.Title>Serviços</S.Title>
            </div>
            <S.Text className="div-T">
              Na Hivetron, transformamos desafios em soluções tecnológicas.
              Oferecemos uma gama de serviços personalizados para atender às
              necessidades específicas de cada cliente. Conheça o que podemos
              fazer por você:
            </S.Text>
          </S.HeaderSection>
          <Carousel />
        </S.ServicesSection>

        <S.DevsSection id="devs-section">
          <section ref={devsRef} className={devsVisible ? "visible" : ""}>
            <S.HeaderSection>
              <div className="div-T">
                <S.DevsIcon alt="developers-icon" />
                <S.Title>Desenvolvedores</S.Title>
              </div>
            </S.HeaderSection>
            <StaffCard />
          </section>
        </S.DevsSection>

        <S.TechsSection
          id="techs-section"
          ref={techsRef}
          className={techsVisible ? "visible" : ""}
        >
          <S.HeaderSection>
            <div className="div-T">
              <S.TechsIcon alt="tech-icon" />
              <S.Title>Tecnologias</S.Title>
            </div>
            <div className="principal-techs div-T">
              {technologies.map((tech) => (
                <label key={tech.id}>
                  <i
                    className={`${tech.icon} icon`}
                    onMouseEnter={() => setCurrentTech(tech.description)}
                    onMouseLeave={() => setCurrentTech("")}
                  ></i>
                </label>
              ))}
            </div>
            <S.Text className="icon-description">{currentTech}</S.Text>
          </S.HeaderSection>
          <S.TeamBeeImg src={teamBee.src} alt="Time Hivetron" />
        </S.TechsSection>

        <S.ProjectsSection id="projects-section">
          <section
            ref={projectsRef}
            className={projectsVisible ? "visible" : ""}
          >
            <S.HeaderSection>
              <div className="div-T">
                <S.ProjIcon alt="project-icon" />
                <S.Title className="title">Projetos</S.Title>
              </div>
              <S.Text></S.Text>
            </S.HeaderSection>
            <Projects />
          </section>
        </S.ProjectsSection>

        <S.Intersection>
          <S.InterSectionImg
            src={intersectionFooterBg.src}
            alt="Background Footer"
          />
        </S.Intersection>

        <S.ContactSection id="contact-section">
          <section
            className={`${contactVisible ? "visible" : ""}`}
            ref={contactRef}
          >
            <S.HeaderSection>
              <div className="div-T">
                <S.CttIcon alt="contact-icon" />
                <S.Title>Contato</S.Title>
              </div>
              <div className="contacts">
                <a href="mailto:hivetron.dev@gmail.com" target="_blank">
                  <MailOutlined />
                  <label>hivetron.dev@gmail.com</label>
                </a>
                <a href="https://wa.me/5516988455588?text=" target="_blank">
                  <WhatsAppOutlined />
                  <label>Whatsapp</label>
                </a>
                <a href="tel:16988455588" target="_blank">
                  <PhoneOutlined />
                  <label>Fale com a gente</label>
                </a>
              </div>
            </S.HeaderSection>
          </section>
        </S.ContactSection>
      </S.ContainerContent>
      <Footer />
    </S.Container>
  );
}

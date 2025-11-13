import styled from "styled-components";
import Image from "next/image";
import ServImg from "../../public/GoogleCode.png";
import DevsImg from "../../public/Workspace.png";
import TechsImg from "../../public/Code.png";
import ProjImg from "../../public/Flipboard(1).png";
import CttImg from "../../public/PhoneMessage.png";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #000;
  overflow-x: hidden;

  section {
    width: 85%;
    height: 100vh;
    padding: 50px 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }

  section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    section {
      width: 100%;
      padding: 30px 100px;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 30px 70px;
    }
  }

  @media (max-width: 425px) {
    section {
      padding: 20px;
      align-items: center;
    }
  }
`;

export const ContainerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  .title {
    color: #000;
  }

  .div-T {
    padding-bottom: 50px;
  }

  @media (max-width: 768px) {
    .div-T {
      padding-bottom: 30px;
    }
  }

  @media (max-width: 425px) {
    .div-T {
      justify-content: center;
    }
  }
`;

export const Title = styled.h2`
  color: #ffab00;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 425px) {
    font-size: 1.7rem;
  }
`;

export const Text = styled.p`
  color: #fff;

  @media (max-width: 425px) {
    font-size: 0.85rem;
  }
`;

export const FaceSection = styled.div`
  height: calc(100vh - 70px);

  @media (max-width: 1024px) {
    height: 100%;
  }

  @media (max-width: 425px) {
  }
`;

export const FaceSectionImg = styled.img`
  width: 100%;
`;

export const AboutSection = styled.section`
  height: 800px !important;

  .sect {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 70px;
  }

  div {
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 768px) {
    .sect {
      gap: 30px;
    }
  }

  @media (max-width: 425px) {
    .sect {
      gap: 15px;
    }

    div {
      gap: 10px;
    }
  }
`;

export const AboutSectionImg = styled.img`
  width: 400px;

  @media (max-width: 1444px) {
    width: 300px;
  }

  @media (max-width: 1024px) {
    width: 230px;
  }

  @media (max-width: 425px) {
    width: 90px;
  }
`;

export const ServicesSection = styled.section`
  height: 100% !important;
  margin-top: 50px !important;
  margin-bottom: 50px !important;

  @media (max-width: 425px) {
    p {
      text-align: center;
    }
  }
`;

export const Intersection = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  gap: 0;
  position: relative;
`;

export const InterSectionImg = styled.img`
  width: 100%;
`;

export const ServiceSectionImg = styled.img`
  width: 100%;
`;

export const DevsSection = styled.div`
  width: 100%;
  background: #1f1f1f;

  section {
    height: 100%;
    margin-top: 50px !important;
    margin-bottom: 50px !important;
  }
`;

export const TechsSection = styled.section`
  height: 500px !important;
  position: relative;
  margin-top: 50px !important;
  margin-bottom: 50px !important;
  justify-content: flex-start !important;

  label {
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.3);
    }
  }

  .icon {
    color: #ffab00;
    font-size: 3rem;
    padding-right: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .principal-techs {
    display: flex;
    align-items: center;
    gap: 0;
  }

  .icon-description {
    height: 30px;
  }

  @media (max-width: 768px) {
    .icon {
      color: #ffab00;
      font-size: 2.7rem;
      padding-right: 25px;
    }

    label {
      &:hover {
        transform: scale(1.15);
      }
    }
  }

  @media (max-width: 425px) {
    .principal-techs {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px 0;
      justify-content: center;
    }
  }
`;

export const TeamBeeImg = styled.img`
  width: 350px;
  position: absolute;
  right: 0;
  bottom: 10px;
  opacity: 0.8;

  @media (max-width: 1444px) {
    width: 250px;
  }

  @media (max-width: 1024px) {
    width: 230px;
  }

  @media (max-width: 768px) {
    width: 210px;
  }

  @media (max-width: 425px) {
    width: 180px;
  }
`;

export const ProjectsSection = styled.div`
  background-color: #ffab00;
  height: 100% !important;

  section {
    height: 100% !important;
    justify-content: flex-start !important;
    margin-top: 50px !important;
    margin-bottom: 50px !important;
    padding-bottom: 0 !important;
  }

  @media (max-width: 430px) {
    section {
      margin-bottom: 80px !important;
    }
  }
`;

export const ContactSection = styled.div`
  height: 100% !important;
  position: relative;

  section {
    height: 500px !important;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: start;
    color: #fff;
    font-size: 2rem;

    a {
      display: flex;
      align-items: center;
      gap: 20px;
      text-decoration: none;
      color: #fff;

      &:hover {
        color: #ffab00;
      }
    }

    label {
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  @media (max-width: 1024px) {
    section {
      position: relative;
      top: 40px;
      left: 20px;
    }
  }

  @media (max-width: 768px) {
    .contacts {
      font-size: 1.7rem;

      a {
        gap: 10px;
      }

      label {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 425px) {
    section {
      position: static;
      display: flex;
      align-items: center;
    }

    .contacts {
      font-size: 1.3rem;

      a {
        gap: 8px;
      }

      label {
        font-size: 1rem;
      }
    }
  }
`;

export const ServiceIcon = styled(Image).attrs({ src: ServImg })`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 425px) {
    width: 40px;
    height: 40px;
  }
`;
export const DevsIcon = styled(Image).attrs({ src: DevsImg })`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 425px) {
    width: 40px;
    height: 40px;
  }
`;
export const TechsIcon = styled(Image).attrs({ src: TechsImg })`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 425px) {
    width: 40px;
    height: 40px;
  }
`;
export const ProjIcon = styled(Image).attrs({ src: ProjImg })`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 425px) {
    width: 40px;
    height: 40px;
  }
`;
export const CttIcon = styled(Image).attrs({ src: CttImg })`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 425px) {
    width: 40px;
    height: 40px;
  }
`;

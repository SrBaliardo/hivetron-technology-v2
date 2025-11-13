import styled from "styled-components";
import { Carousel } from "antd";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1444px) {
    transform: scale(0.9);
  }

  @media (max-width: 768) {
    height: auto;
  }
`;

export const SlideImage = styled.img``;

export const CustomCarousel = styled(Carousel)`
  .slick-slide {
    text-align: center;
  }
  .slick-slide img {
    width: 100%;
    padding: 10px;
    border-radius: 30px !important;
  }
  .slick-dots {
    display: flex;
    gap: 5px;
    transform: scale(1.5);
    bottom: -20px;
  }
  .slick-dots li button {
    background-color: #ffffff;
  }
  .slick-dots li.slick-active button {
    background-color: #ffab00;
  }
`;

export const Content = styled.h3`
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    height: 500px;
  }

  h2 {
    color: #ffab00;
    font-size: 1.7rem !important;
  }

  p {
    font-size: 1rem;
    font-weight: normal;
    justify-self: center;
    width: 80%;
  }

  @media (max-width: 425px) {
    h2 {
      font-size: 1.5rem !important;
    }

    p {
      font-size: 0.94rem;
      width: 90%;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 1024px) {
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    justify-content: space-between;
  }

  @media (max-width: 425px) {
    transform: scale(1);
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: 400px;
  height: 630px;
  border: 3px solid #ffab00;
  border-radius: 25px;
  background-color: #000;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  .icon {
    color: #ffab00;
    font-size: 2.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    height: 480px;

    .icon {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 425px) {
    width: 80%;
    height: 350px;
    gap: 15px;

    .icon {
      font-size: 1.9rem;
    }
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 1.7rem;

  @media (max-width: 768px) {
    font-size: 1.45rem;
  }

  @media (max-width: 425px) {
    font-size: 1.1rem;
  }
`;

export const Avatar = styled.img`
  width: 90%;

  @media (max-width: 768px) {
    width: 75%;
  }

  @media (max-width: 425px) {
    width: 45%;
  }
`;

export const Socials = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

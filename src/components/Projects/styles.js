import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;

  .robotic-flying-bee {
    width: 100px;
  }

  .cover {
    width: 400px;
  }

  @media (max-width: 768px) {
    gap: 5px;
  }

  @media (max-width: 425px) {
    flex-direction: column;

    .cover {
      width: 50px;
    }
  }
`;

export const LeftContainer = styled.div`
  width: 70%;
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;

  @media (max-width: 1444px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 400px;
    gap: 10px;
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  height: 490px;

  @media (max-width: 1444px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    height: 390px;
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

export const MWContainer = styled.div`
  display: none;

  @media (max-width: 425px) {
    width: 100%;
    height: 550px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
  }
`;

export const MWTop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const RowCard = styled.div`
  border-radius: 25px;
  background-color: #000;
  padding: 15px;
  cursor: pointer;

  @media (max-width: 768px) {
    border-radius: 15px;
    gap: 10px;
  }
`;

export const Card = styled.div`
  height: 100%;
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
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 1.7rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Avatar = styled.img`
  width: 90%;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

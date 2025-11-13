import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const MenuContainer = styled.div`
  padding-bottom: 30px;
  transform: scale(0.8);
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 40px;
  height: 50px;
  position: absolute;

  div {
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 7px;
    margin: 4px 0;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(45deg) translate(8px, 8px)" : "rotate(0)"};
    }
    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(-45deg) translate(8px, -8px)" : "rotate(0)"};
    }
  }
`;

export const MenuList = styled.ul`
  position: absolute;
  top: -30px;
  right: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 200px;
`;

export const MenuItem = styled.li`
  position: relative;
  width: 80px;
  height: 85px;
  background-color: #000;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  font-size: 0.8rem;
  color: #000;
  font-weight: 500;
  opacity: 0;
  transform: scale(0.8);
  ${({ $isOpen, $delay }) =>
    $isOpen &&
    css`
      animation: ${fadeIn} 0.3s ease-out ${$delay}s forwards;
    `}

  transition: all 0.3s ease;
  z-index: 3;

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    background: linear-gradient(
      180deg,
      rgba(255, 171, 0, 1) 0%,
      rgba(252, 220, 101, 1) 50%,
      rgba(255, 171, 0, 1) 100%
    );
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    z-index: -1;
  }

  &:hover {
    font-weight: bold;

    &::after {
      background: #fff;
    }
  }

  &:nth-child(1) {
    transform: translateX(-225px) translateY(70px) !important;
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    transform: translateX(-220px) translateY(90px) !important;
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    transform: translateX(-55px) translateY(-15px) !important;
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    transform: translateX(-50px) translateY(5px) !important;
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    transform: translateX(115px) translateY(-100px) !important;
    animation-delay: 0.5s;
  }
  &:nth-child(6) {
    transform: translateX(120px) translateY(-80px) !important;
    animation-delay: 0.6s;
  }
`;

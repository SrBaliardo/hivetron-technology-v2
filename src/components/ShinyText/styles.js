import styled, { keyframes, css } from "styled-components";

const shine = keyframes`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  color: #ffab00c9;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 60%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  display: inline-block;
  animation: ${shine} ${({ speed }) => speed || 3}s linear infinite;

  &.disabled {
    animation: none;
    background: none;
    color: #ffab00c9;
  }
`;

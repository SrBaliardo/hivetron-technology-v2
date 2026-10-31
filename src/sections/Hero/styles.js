import styled, { keyframes } from "styled-components";
const arrive = keyframes`from { opacity: .3; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); }`;
const fly = keyframes`0%,100% { transform: translate(326px,44px) rotate(-18deg); } 45% { transform: translate(306px,30px) rotate(-8deg); }`;
export const Root = styled.section`
  padding-top: clamp(52px, 6vw, 88px);
  background: radial-gradient(ellipse at 85% 30%, #29311c66, transparent 52%);
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 52px;
  align-items: center;
  @media (max-width: 1000px) {
    gap: 24px;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 44px;
  }
`;
export const Copy = styled.div`
  min-width: 0;
  animation: ${arrive} 650ms ease-out;
`;
export const Title = styled.h1`
  font-size: clamp(43px, 5.15vw, 72px);
  letter-spacing: -0.06em;
  line-height: 1.035;
  > span {
    color: ${({ theme }) => theme.colors.accent};
  }
  @media (max-width: 800px) {
    font-size: clamp(45px, 8vw, 68px);
  }
`;
export const Description = styled.p`
  max-width: 480px;
  margin-top: 28px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 16px;
  line-height: 1.8;
`;
export const Note = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 27px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 11px;
  > span {
    width: 5px;
    height: 5px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
    flex: 0 0 auto;
  }
`;
export const Artwork = styled.div`
  min-width: 0;
  border: 1px solid #414936;
  border-radius: 12px;
  background: #1a2015;
  transform: rotate(2deg);
  transition: transform 300ms;
  animation: ${arrive} 850ms ease-out;
  &:hover {
    transform: rotate(0);
  }
  > svg {
    width: 100%;
    height: auto;
  }
  .core {
    transform-origin: 250px 215px;
    transition: transform 300ms;
  }
  &:hover .core {
    transform: scale(1.04);
  }
  .bee {
    animation: ${fly} 4.5s ease-in-out;
  }
  @media (max-width: 800px) {
    width: min(100% - 12px, 470px);
    margin-inline: auto;
  }
`;
export const ArtLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 22px 24px 0;
  color: #b6c2a4;
  font: 9px ${({ theme }) => theme.font.mono};
  letter-spacing: 0.12em;
  > span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
  }
`;
export const ArtFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 22px;
  border-top: 1px solid #414936;
  color: #b6c2a4;
  font: 9px ${({ theme }) => theme.font.mono};
  letter-spacing: 0.05em;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-block: 26px;
  margin-top: 72px;
  border-block: 1px solid ${({ theme }) => theme.colors.border};
  font: 10px ${({ theme }) => theme.font.mono};
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.muted};
  > span:nth-child(2) {
    font: 12px ${({ theme }) => theme.font.body};
    letter-spacing: 0;
  }
  > a {
    display: inline-flex;
    align-items: center;
    gap: 28px;
    min-height: 44px;
    color: ${({ theme }) => theme.colors.text};
  }
  a span {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 20px;
  }
  @media (max-width: 600px) {
    margin-top: 48px;
    > span:nth-child(2) {
      display: none;
    }
  }
`;

import styled from "styled-components";
export const Root = styled.section`
  padding-block: 24px 80px;
`;
export const Box = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 24px;
  padding: clamp(28px, 5vw, 64px);
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.ink};
  &:focus-visible,
  & :focus-visible {
    outline-color: ${({ theme }) => theme.colors.ink};
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const Copy = styled.div`
  min-width: 0;
  > p:first-child::before {
    background: currentColor;
  }
  > p:first-child {
    font-size: 9px;
    letter-spacing: 0.08em;
  }
  h2 {
    font-size: clamp(36px, 5.2vw, 64px);
    letter-spacing: -0.055em;
  }
  em {
    font-style: normal;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 7px;
  }
  > p:not(:first-child) {
    max-width: 440px;
    margin-top: 24px;
    font-size: 14px;
  }
`;
export const Chat = styled.a`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px 20px;
  margin-top: 30px;
  min-height: 52px;
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
  transition: transform 180ms;
  &:hover {
    transform: translateY(-2px);
  }
`;
export const Email = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  max-width: 100%;
  overflow-wrap: anywhere;
  margin-top: 16px;
  min-height: 44px;
  font-size: 13px;
  font-weight: 600;
  svg {
    flex: 0 0 auto;
  }
`;
export const Phone = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-size: 12px;
`;
export const Decoration = styled.div`
  align-self: center;
  justify-self: center;
  text-align: center;
  > div {
    margin-top: 26px;
    font: 9px/1.8 ${({ theme }) => theme.font.mono};
    letter-spacing: 0.2em;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
export const Logo = styled.span`
  display: grid;
  place-items: center;
  width: 230px;
  aspect-ratio: 1;
  svg {
    width: 180px;
    height: auto;
    color: ${({ theme }) => theme.colors.ink};
  }
`;

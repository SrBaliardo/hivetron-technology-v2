import styled from "styled-components";

export const Container = styled.div`
  width: min(${({ theme }) => theme.width}, calc(100% - 96px));
  margin-inline: auto;
  @media (max-width: 700px) {
    width: calc(100% - 40px);
  }
`;
export const Section = styled.section`
  padding-block: clamp(72px, 8vw, 120px);
`;
export const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  &::before {
    content: "";
    width: 7px;
    height: 7px;
    background: ${({ theme }) => theme.colors.accent};
  }
`;
export const Heading = styled.h2`
  max-width: 760px;
  font-size: clamp(34px, 4.3vw, 56px);
  letter-spacing: -0.045em;
`;
export const Intro = styled.p`
  max-width: 530px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 16px;
  margin-top: 22px;
`;
export const Button = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  padding: 15px 22px;
  min-height: 52px;
  border: 1px solid
    ${({ theme, $secondary }) =>
      $secondary ? theme.colors.border : theme.colors.accent};
  border-radius: 6px;
  background: ${({ theme, $secondary }) =>
    $secondary ? "transparent" : theme.colors.accent};
  color: ${({ theme, $secondary }) =>
    $secondary ? theme.colors.text : theme.colors.ink};
  font-size: 13px;
  font-weight: 700;
  transition:
    transform 180ms ease,
    background 180ms ease,
    border-color 180ms ease;
  &:hover {
    transform: translateY(-2px);
    background: ${({ theme, $secondary }) =>
      $secondary ? theme.colors.elevated : theme.colors.accentHover};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;
export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
`;
export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    font-size: 11px;
    border: 1px solid currentColor;
    border-radius: 4px;
    padding: 4px 9px;
  }
`;

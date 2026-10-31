import styled from "styled-components";
export const HeadingRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  > p {
    margin: 0;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 48px;
  > div {
    display: flex;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
export const Card = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: clamp(26px, 3vw, 40px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  transition:
    border-color 200ms,
    transform 200ms;
  &:hover {
    border-color: #8b793f;
    transform: translateY(-3px);
  }
  h3 {
    font-size: clamp(24px, 2.6vw, 32px);
    letter-spacing: -0.035em;
    margin-bottom: 16px;
  }
  > p {
    color: ${({ theme }) => theme.colors.muted};
    max-width: 410px;
    font-size: 14px;
    margin-bottom: 24px;
  }
  > ul {
    margin-top: auto;
    color: #a6ab9b;
  }
`;
export const CardTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 38px;
  > svg {
    color: ${({ theme }) => theme.colors.accent};
  }
  > span {
    color: #939b86;
    font: 12px ${({ theme }) => theme.font.mono};
  }
`;
export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 28px;
  min-height: 44px;
  margin-top: 24px;
  font-size: 12px;
  font-weight: 600;
  > svg {
    color: ${({ theme }) => theme.colors.accent};
    transition: transform 200ms;
  }
  &:hover > svg {
    transform: translate(2px, -2px);
  }
`;

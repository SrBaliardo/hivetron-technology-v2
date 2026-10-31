import styled from "styled-components";
export const Root = styled.section`
  padding-block: 56px;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  h2 {
    font-size: 19px;
    letter-spacing: -0.02em;
  }
  p {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 12px;
  }
  @media (max-width: 650px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }
`;
export const List = styled.ul`
  list-style: none;
  margin: 32px 0 0;
  padding: 24px 0;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 24px;
  border-block: 1px solid ${({ theme }) => theme.colors.border};
  strong {
    display: block;
    font-family: ${({ theme }) => theme.font.display};
    font-size: 22px;
    font-weight: 500;
  }
  span {
    color: ${({ theme }) => theme.colors.muted};
    font: 10px ${({ theme }) => theme.font.mono};
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 360px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

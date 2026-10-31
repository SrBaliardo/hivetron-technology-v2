import styled from "styled-components";
export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  @media (max-width: 1000px) {
    gap: 50px;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const Signature = styled.p`
  margin-top: 32px;
  font-family: ${({ theme }) => theme.font.display};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 20px;
  > span {
    display: block;
    margin-top: 4px;
    font-family: ${({ theme }) => theme.font.body};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.muted};
  }
`;
export const Steps = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const Step = styled.div`
  display: flex;
  gap: 25px;
  padding: 27px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  > span {
    color: ${({ theme }) => theme.colors.accent};
    font: 12px ${({ theme }) => theme.font.mono};
    padding-top: 4px;
  }
  h3 {
    font-size: 22px;
    letter-spacing: -0.03em;
  }
  p {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 13px;
    margin-top: 12px;
  }
`;

import styled from "styled-components";
export const Root = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 26px;
  padding-block: 40px;
  > p {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 13px;
  }
  > a:last-child {
    display: inline-flex;
    align-items: center;
    gap: 20px;
    min-height: 44px;
    font-size: 12px;
  }
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding-block: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 10px;
  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

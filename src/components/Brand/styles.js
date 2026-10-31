import styled from "styled-components";
export const Mark = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 11px;
  > svg {
    color: ${({ theme }) => theme.colors.accent};
    flex: 0 0 auto;
  }
  > span {
    font-family: ${({ theme }) => theme.font.display};
    font-weight: 600;
    font-size: 24px;
    letter-spacing: -0.06em;
    line-height: 1;
  }
  .descriptor {
    display: block;
    margin-top: 6px;
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 8px;
    letter-spacing: 0.31em;
    font-weight: 400;
  }
`;

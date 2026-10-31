import styled from "styled-components";
import { Section } from "@/styles/primitives";
export const Root = styled(Section)`
  background: ${({ theme }) => theme.colors.paper};
  color: ${({ theme }) => theme.colors.ink};
  &:focus-visible,
  & :focus-visible {
    outline-color: ${({ theme }) => theme.colors.ink};
  }
`;
export const HeadingRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  > p {
    max-width: 300px;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.paperMuted};
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
  gap: 24px;
  margin-top: 48px;
  align-items: start;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
export const Card = styled.article`
  border: 1px solid #cbd0bf;
  background: #e7e9df;
  border-radius: 8px;
  padding: clamp(24px, 3vw, 38px);
  h3 {
    font-size: clamp(28px, 3.2vw, 40px);
    letter-spacing: -0.04em;
    margin-top: 22px;
    max-width: 420px;
  }
`;
export const CardTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  color: #59644e;
  font: 10px ${({ theme }) => theme.font.mono};
  letter-spacing: 0.06em;
  padding-bottom: 25px;
  border-bottom: 1px solid #cbd0bf;
`;
export const ProjectName = styled.p`
  margin-top: 34px;
  color: #47543b;
  font-weight: 700;
  font-size: 15px;
`;
export const CaseStudy = styled.dl`
  display: grid;
  gap: 22px;
  margin: 28px 0;
  dt {
    font-size: 13px;
    font-weight: 700;
  }
  dd {
    margin: 8px 0 0;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.paperMuted};
  }
`;
export const Scope = styled.p`
  border-top: 1px solid #c0c7b5;
  padding-top: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.paperMuted};
`;
export const ProjectLink = styled.a`
  display: inline-flex;
  gap: 12px;
  align-items: center;
  margin-top: 20px;
  min-height: 44px;
  font-size: 12px;
  font-weight: 700;
`;
export const Demo = styled.div`
  margin-top: 24px;
  padding: 20px;
  border: 1px solid #bdc7b1;
  border-radius: 6px;
  background: #f2f3eb;
  > strong {
    font-size: 15px;
  }
  > p {
    margin-top: 8px;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.paperMuted};
  }
  > small {
    display: block;
    margin-top: 12px;
    font-size: 11px;
    color: ${({ theme }) => theme.colors.paperMuted};
  }
`;
export const DemoLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 44px;
  margin-top: 16px;
  padding: 12px 16px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-weight: 700;
  transition: background 180ms ease;
  &:hover {
    background: #35432b;
  }
`;
export const Privacy = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-top: 32px;
  max-width: 850px;
  color: ${({ theme }) => theme.colors.paperMuted};
  > svg {
    flex: 0 0 auto;
    margin-top: 2px;
  }
  p {
    font-size: 12px;
  }
  strong {
    color: ${({ theme }) => theme.colors.ink};
  }
`;

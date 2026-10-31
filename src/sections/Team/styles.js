import styled from "styled-components";
import { Section } from "@/styles/primitives";
export const Root = styled(Section)`
  background: ${({ theme }) => theme.colors.surface};
  border-block: 1px solid ${({ theme }) => theme.colors.border};
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;
  margin-top: 48px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
export const Card = styled.article`
  display: grid;
  grid-template-columns: 140px 1fr;
  align-items: start;
  gap: 26px;
  h3 {
    font-size: 27px;
    letter-spacing: -0.035em;
    margin-top: 8px;
  }
  div > p:not(:first-child) {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 13px;
    margin-top: 15px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 88px 1fr;
    gap: 18px;
    h3 {
      font-size: 24px;
    }
  }
`;
export const Portrait = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  padding: 4px;
  overflow: hidden;
  aspect-ratio: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    filter: saturate(0.65);
    transition: filter 200ms;
  }
  &:hover img {
    filter: saturate(1);
  }
`;
export const Role = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font: 10px ${({ theme }) => theme.font.mono};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;
export const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 16px;
  a {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    min-height: 44px;
    font-size: 12px;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

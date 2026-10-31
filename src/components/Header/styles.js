import styled from "styled-components";
import { Container } from "@/styles/primitives";
export const Root = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
export const Inner = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  min-height: 90px;
  > a {
    display: inline-flex;
    padding-block: 10px;
  }
  @media (max-width: 900px) {
    min-height: 78px;
  }
`;
export const Skip = styled.a`
  position: fixed;
  top: 12px;
  left: 20px;
  padding: 12px 20px;
  transform: translateY(-200%);
  background: ${({ theme }) => theme.colors.accent};
  color: #101110;
  z-index: 30;
  &:focus {
    transform: translateY(0);
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;
  > a {
    display: inline-flex;
    align-items: center;
    gap: 18px;
    min-height: 44px;
    font-size: 12px;
    font-weight: 600;
    transition: color 180ms;
  }
  > a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
  .contact {
    color: ${({ theme }) => theme.colors.accent};
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 10px 16px;
    border-radius: 5px;
  }
  @media (max-width: 900px) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    position: absolute;
    inset: 100% 0 auto;
    max-height: calc(100dvh - 78px);
    overflow-y: auto;
    padding: 20px;
    background: ${({ theme }) => theme.colors.surface};
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    > a {
      padding: 12px;
      font-size: 15px;
    }
    .contact {
      margin-top: 10px;
      justify-content: space-between;
    }
  }
`;
export const Toggle = styled.button`
  display: none;
  align-items: center;
  gap: 14px;
  min-height: 44px;
  padding: 8px;
  color: inherit;
  background: none;
  border: none;
  font-size: 13px;
  @media (max-width: 900px) {
    display: inline-flex;
  }
`;
export const Bars = styled.span`
  width: 22px;
  display: grid;
  gap: 6px;
  span {
    width: 22px;
    height: 2px;
    background: currentColor;
    transition: transform 180ms;
  }
  span:first-child {
    transform: ${({ $open }) =>
      $open ? "translateY(4px) rotate(45deg)" : "none"};
  }
  span:last-child {
    transform: ${({ $open }) =>
      $open ? "translateY(-4px) rotate(-45deg)" : "none"};
  }
`;

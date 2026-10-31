import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face { font-family: "Manrope"; src: url("/fonts/manrope-latin.woff2") format("woff2"); font-style: normal; font-weight: 400 700; font-display: swap; }
  @font-face { font-family: "Space Grotesk"; src: url("/fonts/space-grotesk-latin.woff2") format("woff2"); font-style: normal; font-weight: 500 600; font-display: swap; }
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 100px; }
  body {
    margin: 0; background: ${({ theme }) => theme.colors.background}; color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font.body}; font-size: 16px; line-height: 1.65; -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, p { margin: 0; }
  h1, h2, h3 { font-family: ${({ theme }) => theme.font.display}; line-height: 1.12; font-weight: 600; }
  a { color: inherit; text-decoration: none; }
  button, input, textarea { font: inherit; }
  button { cursor: pointer; }
  button, a { -webkit-tap-highlight-color: transparent; }
  img, svg { display: block; max-width: 100%; }
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }
  button:focus-visible, a:focus-visible, summary:focus-visible, [tabindex="-1"]:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.accent}; outline-offset: 5px;
  }
  ::selection { background: ${({ theme }) => theme.colors.accent}; color: #101110; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation: none !important; transition: none !important; }
  }
`;
export default GlobalStyles;

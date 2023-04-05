import { createGlobalStyle } from 'styled-components';

export const GlobalStyleComponent = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight(21, 14)};
  letter-spacing: ${({ theme }) => theme.letterSpacing.low};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  background-color: ${({ theme }) => theme.colors.bgColor};
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul,
ol {
  padding: 0;
  margin: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
button {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

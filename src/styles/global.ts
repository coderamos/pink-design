import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components';

type GlobalStylesProps = {
  removeBackgroundColor?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ${props => props.theme.font.family};
  outline: none;

  &::before,
  &::after {
    box-sizing: inherit;
  }
}

  ${({ theme, removeBackgroundColor }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      ${!removeBackgroundColor &&
      css`
        background-color: ${theme.colors.secondary};
      `}

      ::-webkit-scrollbar {
        background-color: transparent;
        width: 0.8rem;
      }
      ::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: ${theme.border.radius};
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.primary};
        border-radius: ${theme.border.radius};
      }
    }
  `}

`;

export default GlobalStyles;

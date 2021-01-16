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

    :root {
      --border-radius: 0.4rem;

      --color-black: #000000;
      --color-digital: #cb1e40;
      --color-gallery: #eaeaea;
      --color-gray: #808080;
      --color-primary: #ed145b;
      --color-secondary: #080808;
      --color-storybook: #ff4785;
      --color-white: #ffffff;

      --font-family: "Space Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
      --font-light: 300;
      --font-normal: 400;
      --font-bold: 600;
      --font-size-xsmall: 1.2rem;
      --font-size-small: 1.4rem;
      --font-size-medium: 1.6rem;
      --font-size-large: 1.8rem;
      --font-size-xlarge: 2rem;
      --font-size-xxlarge: 2.8rem;
      --font-size-huge: 5.2rem;

      --grid-container: 130rem;
      --grid-gutter: 3.2rem;

      --spacing-xxsmall: 0.8rem;
      --spacing-xsmall: 1.6rem;
      --spacing-small: 2.4rem;
      --spacing-medium: 3.2rem;
      --spacing-large: 4rem;
      --spacing-xlarge: 4.8rem;
      --spacing-xxlarge: 5.6rem;

      --layer-base: 10;
      --layer-menu: 20;
      --layer-overlay: 30;
      --layer-modal: 40;
      --layer-alwaysOnTop: 50;

      --transition-default: 0.3s ease-in-out;
      --transition-fast: 0.1s ease-in-out;
    }
  `}

`;

export default GlobalStyles;

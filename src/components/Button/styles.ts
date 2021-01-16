import styled, { css, DefaultTheme } from 'styled-components';
import { darken, tint } from 'polished';

import { ButtonProps } from '.';

type MinimalProps = boolean | undefined;

export type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal' | 'colorStyle'>;

const buttonModifiers = {
  primary: (theme: DefaultTheme, minimal: MinimalProps) => css`
    background: ${minimal ? 'none' : 'var(--color-primary)'};
    color: ${minimal ? 'var(--color-primary)' : 'var(--color-white)'};
    &:hover {
      background: ${minimal ? 'none' : 'var(--color-storybook)'};
      color: ${minimal ? 'var(--color-storybook)' : 'var(--color-white)'};
    }
  `,
  black: (theme: DefaultTheme, minimal: MinimalProps) => css`
    background: ${minimal ? 'none' : 'var(--color-black)'};
    color: ${minimal ? 'var(--color-black)' : 'var(--color-white)'};
    &:hover {
      background: ${minimal ? 'none' : tint(0.15, '#000000')};
      color: ${minimal ? 'var(--color-black)' : 'var(--color-white)'};
    }
  `,
  white: (theme: DefaultTheme, minimal: MinimalProps) => css`
    background: ${minimal ? 'none' : 'var(--color-white)'};
    color: ${minimal ? 'var(--color-white)' : 'var(--color-black)'};
    &:hover {
      background: ${minimal ? 'none' : darken(0.1, '#ffffff')};
      color: ${minimal ? darken(0.1, '#ffffff') : 'var(--color-black)'};
    }
  `,
  small: () => css`
    font-size: var(--font-size-xsmall);
    height: 3rem;
  `,
  medium: () => css`
    font-size: var(--font-size-small);
    height: 4rem;
    padding: var(--spacing-xxsmall) var(--spacing-medium);
  `,
  large: () => css`
    font-size: var(--font-size-medium);
    height: 5rem;
    padding: var(--spacing-xxsmall) var(--spacing-xlarge);
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: var(--spacing-xxsmall);
      }
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, colorStyle, disabled }) => css`
    align-items: center;
    display: inline-flex;
    justify-content: center;
    border-radius: var(--border-radius);
    border: none;
    cursor: pointer;
    padding: var(--spacing-xxsmall);
    transition: background 0.3s;
    text-decoration: none;
    font-family: var(--font-family);
    -webkit-font-smoothing: antialiased;

    ${!!size && buttonModifiers[size]()};
    ${!!fullWidth && buttonModifiers.fullWidth};
    ${!!hasIcon && buttonModifiers.withIcon()};
    ${!!colorStyle && buttonModifiers[colorStyle](theme, minimal)};
    ${disabled && buttonModifiers.disabled()};
  `}
`;

export const IconWrapper = styled.span``;

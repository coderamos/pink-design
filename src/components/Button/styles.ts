import styled, { css, DefaultTheme } from 'styled-components';
import { darken, tint } from 'polished';

import { ButtonProps } from '.';

type MinimalProps = boolean | undefined;

export type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal' | 'colorStyle'>;

const buttonModifiers = {
  primary: (theme: DefaultTheme, minimal: MinimalProps) => css`
    background: ${minimal ? 'none' : theme.colors.primary};
    color: ${minimal ? theme.colors.primary : theme.colors.white};
    &:hover {
      background: ${minimal ? 'none' : theme.colors.storybook};
      color: ${minimal ? theme.colors.storybook : theme.colors.white};
    }
  `,
  black: (theme: DefaultTheme, minimal: MinimalProps) => css`
    background: ${minimal ? 'none' : theme.colors.black};
    color: ${minimal ? theme.colors.black : theme.colors.white};
    &:hover {
      background: ${minimal ? 'none' : tint(0.15, theme.colors.black)};
      color: ${minimal ? theme.colors.black : theme.colors.white};
    }
  `,
  white: (theme: DefaultTheme, minimal: MinimalProps) => css`
    background: ${minimal ? 'none' : theme.colors.white};
    color: ${minimal ? theme.colors.white : theme.colors.black};
    &:hover {
      background: ${minimal ? 'none' : darken(0.1, theme.colors.white)};
      color: ${minimal ? darken(0.1, theme.colors.white) : theme.colors.black};
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 3rem;
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 4rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    height: 5rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
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
    border-radius: ${theme.border.radius};
    border: none;
    cursor: pointer;
    padding: ${theme.spacings.xxsmall};
    transition: background 0.3s;
    text-decoration: none;
    font-family: ${theme.font.family};
    -webkit-font-smoothing: antialiased;

    ${!!size && buttonModifiers[size](theme)};
    ${!!fullWidth && buttonModifiers.fullWidth};
    ${!!hasIcon && buttonModifiers.withIcon(theme)};
    ${!!colorStyle && buttonModifiers[colorStyle](theme, minimal)};
    ${disabled && buttonModifiers.disabled()};
  `}
`;

export const IconWrapper = styled.span``;

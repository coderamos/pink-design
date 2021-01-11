import React from 'react';

import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme';

import results from '../.jest-test-results.json';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBackgroundColor />
      <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  a11y: { disable: true },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'digital house',
        value: theme.colors.digital
      },
      {
        name: 'primary',
        value: theme.colors.primary
      },
      {
        name: 'storybook',
        value: theme.colors.storybook
      },
      {
        name: 'white',
        value: theme.colors.white
      },
      {
        name: 'dark',
        value: theme.colors.secondary
      },
      {
        name: 'black',
        value: theme.colors.black
      }
    ]
  },
  options: {
    storySort: {
      method: 'alphabetical'
    }
  }
};

addDecorator(withTests({ results }));

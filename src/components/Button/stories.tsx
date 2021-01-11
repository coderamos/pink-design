import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { ShoppingCartIcon } from '../../assets/icons';

import Button from '.';

export default {
  title: 'Base/Button',
  component: Button,
  args: {
    children: 'button',
    fullWidth: false
  },
  argTypes: {
    children: {
      type: 'string'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      },
      defaultValue: 'medium'
    },
    colorStyle: {
      control: {
        type: 'radio',
        options: ['primary', 'black', 'white']
      },
      defaultValue: 'white'
    },
    minimal: {
      control: 'boolean'
    }
  },
  parameters: {
    backgrounds: {
      default: 'primary'
    },
    jest: ['Button.test.tsx']
  }
} as Meta;

export const ButtonDefault: Story = args => <Button {...args} />;

export const ButtonAsLink: Story = args => <Button {...args} />;

ButtonAsLink.args = {
  as: 'a',
  href: '/link'
};

ButtonAsLink.argTypes = {
  as: {
    control: {
      type: 'inline-radio',
      options: ['a', 'button']
    }
  }
};

export const ButtonWithIcon: Story = args => <Button {...args} />;

ButtonWithIcon.args = {
  icon: <ShoppingCartIcon />
};

ButtonWithIcon.argTypes = {
  icon: {
    type: ''
  }
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'NEXUS/Components/Button',
  component: Button,

tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  argTypes: {
    type: {
      control: 'select',
      options: [
        'Primary',
        'Secondary',
        'Accent',
        'Negative',
        'Positive',
        'White',
      ],
    },

    variant: {
      control: 'select',
      options: [
        'Contained',
        'Outlined',
        'Text',
      ],
    },

    size: {
      control: 'select',
      options: [
        'Large',
        'Medium',
        'Small',
      ],
    },

    loading: {
      control: 'boolean',
    },

    onlyIcon: {
      control: 'boolean',
    },
  },

  args: {
    type: 'Primary',
    variant: 'Contained',
    size: 'Large',
    loading: false,
    onlyIcon: false,
    children: 'Large',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    type: 'Secondary',
  },
};

export const Accent: Story = {
  args: {
    type: 'Accent',
  },
};

export const Negative: Story = {
  args: {
    type: 'Negative',
  },
};

export const Positive: Story = {
  args: {
    type: 'Positive',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'Outlined',
  },
};

export const Text: Story = {
  args: {
    variant: 'Text',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Medium: Story = {
  args: {
    size: 'Medium',
    children: 'Medium',
  },
};

export const Small: Story = {
  args: {
    size: 'Small',
    children: 'Small',
  },
};


import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import RectLoader from './index'

export default {
  title: 'Atoms/RectLoader',
  component: RectLoader, // 最新のStorybookではコンポーネントを明示的に指定
  argTypes: {
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '縦幅',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta<typeof RectLoader>

const Template: StoryFn<typeof RectLoader> = (args) => <RectLoader {...args} />

export const Normal = Template.bind({})

import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import ScaleImage from './index'

export default {
  title: 'Atoms/ScaleImage',
  component: ScaleImage, // 最新版ではコンポーネントを明示的に指定
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '画像の横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '画像の縦幅',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
    containerWidth: {
      control: { type: 'number' },
      defaultValue: 320,
      description: 'コンテナの横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    containerHeight: {
      // スペルミスを修正
      control: { type: 'number' },
      description: 'コンテナの縦幅',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta<typeof ScaleImage>

const Template: StoryFn<typeof ScaleImage> = (args) => <ScaleImage {...args} />

export const Normal = Template.bind({})
Normal.args = { src: '/images/sample/1.jpg' }

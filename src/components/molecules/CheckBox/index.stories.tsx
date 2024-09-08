import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import CheckBox from './index'

// CheckBoxが受け取るプロパティの型定義
interface CheckBoxProps {
  label: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default {
  title: 'Molecules/CheckBox',
  component: CheckBox,
  argTypes: {
    label: {
      control: { type: 'text' },
      description: '表示ラベル',
      table: {
        type: { summary: 'string' },
      },
    },
    checked: {
      control: { type: 'boolean' },
      description: 'チェック状態',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      description: '値が変化した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof CheckBox> // Metaに型を指定

const Template: StoryFn<CheckBoxProps> = (args) => <CheckBox {...args} />

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Label',
  checked: false,
}

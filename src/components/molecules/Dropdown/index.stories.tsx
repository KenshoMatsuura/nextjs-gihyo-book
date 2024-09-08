import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import Dropdown from './index'

// Dropdownコンポーネントが受け取るプロパティの型定義
interface DropdownOption {
  value: string | number | null
  label: string
}

interface DropdownItem {
  value: string | number | null
  label: string
}

// 実際のDropdownItemの型を正しく反映
interface ActualDropdownItem {
  value: string | number | null
  label?: string // labelをstring | undefinedに修正
}

interface DropdownProps {
  options: DropdownOption[]
  hasError?: boolean
  placeholder?: string
  value?: string
  onChange?: (selected?: ActualDropdownItem) => void // 型を実際の定義に合わせる
}

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  argTypes: {
    options: {
      control: { type: 'object' },
      description: 'ドロップダウンの選択肢',
      table: {
        type: { summary: 'array' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'ドロップダウンの値',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: '値が変化した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<DropdownProps>

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />

export const Normal = Template.bind({})
Normal.args = {
  options: [
    { value: null, label: '-' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
  ],
  placeholder: 'Please select items from the list',
}

export const InitialValue = Template.bind({})
InitialValue.args = {
  options: [
    { value: null, label: '-' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
  ],
  placeholder: 'Please select items from the list',
  value: 'one',
}

export const Many = Template.bind({})
Many.args = {
  options: Array.from(Array(20), (_v, k) => {
    return { value: k.toString(), label: k.toString() }
  }),
  placeholder: 'Please select items from the list',
}

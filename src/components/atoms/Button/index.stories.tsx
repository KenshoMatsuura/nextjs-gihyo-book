import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import Button from './index'

// Buttonコンポーネントが受け取るプロパティの型定義
type ButtonProps = {
  variant: 'primary' | 'secondary'
  children: React.ReactNode
  disabled?: boolean
  width?: string // 型をResponsive<string>に合わせる
  height?: string // 型をResponsive<string>に合わせる
  onClick?: () => void
}

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      defaultValue: 'primary',
      description: 'ボタンバリアント',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Button',
      description: 'ボタンテキスト',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Disabledフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    width: {
      control: { type: 'text' }, // widthをstring型に変更
      description: 'ボタンの横幅',
      table: {
        type: { summary: 'string' },
      },
    },
    height: {
      control: { type: 'text' }, // heightをstring型に変更
      description: 'ボタンの縦幅',
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<ButtonProps> // ButtonPropsを使用してMetaの型を定義

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

// Primaryボタン
export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
  width: '200px',
  height: '50px',
}

// Secondaryボタン
export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
  width: '200px',
  height: '50px',
}

// Disabledボタン
export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  children: 'Disabled Button',
  width: '200px',
  height: '50px',
}

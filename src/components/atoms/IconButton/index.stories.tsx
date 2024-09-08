import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { SearchIcon, CloudUploadIcon, PersonOutlineIcon } from './'

// 使用可能なテーマカラーの型定義
type ThemeColors =
  | 'text'
  | 'primary'
  | 'primaryDark'
  | 'primaryLight'
  | 'secondary'
  | 'secondaryDark'
  | 'secondaryLight'
  | 'border'
  | 'danger'
  | 'dangerDark'
  | 'gray'
  | 'black'
  | 'white'

// アイコンボタンが受け取るプロパティの型を定義
type IconButtonProps = {
  color: ThemeColors // テーマカラーの型を使用
  backgroundColor: string
  size: number
  onClick?: () => void
}

export default {
  title: 'Atoms/IconButton', // ストーリーのタイトル
  component: SearchIcon, // 代表的なコンポーネントを指定
  argTypes: {
    color: {
      control: { type: 'color' },
      description: 'アイコン色',
      table: {
        type: { summary: 'ThemeColors' },
      },
    },
    backgroundColor: {
      control: { type: 'color' }, // 背景色も 'color' に統一
      description: '背景色',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'number' },
      defaultValue: 24,
      description: 'アイコンのサイズ',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<IconButtonProps> // IconButtonPropsを使ってMetaの型を指定

const Template: StoryFn<IconButtonProps> = (args) => (
  <>
    <SearchIcon {...args} />
    <CloudUploadIcon {...args} />
    <PersonOutlineIcon {...args} />
  </>
)

export const Normal = Template.bind({})
Normal.args = {
  color: 'black', // カラーパレットにある値を使用
  size: 24,
  backgroundColor: '#ffffff',
}

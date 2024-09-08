import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import UserProfile from './index'

// UserProfile のプロパティの型定義
interface UserProfileProps {
  variant: 'normal' | 'small'
  username: string
  profileImageUrl: string
  numberOfProducts: number
  description: string
}

export default {
  title: 'Organisms/UserProfile',
  component: UserProfile,
  argTypes: {
    variant: {
      options: ['normal', 'small'],
      control: { type: 'radio' },
      defaultValue: 'normal',
      description: 'バリアント（表示スタイル）',
      table: {
        type: { summary: 'normal | small' },
        defaultValue: { summary: 'normal' },
      },
    },
    username: {
      control: { type: 'text' },
      description: 'ユーザー名',
      table: {
        type: { summary: 'string' },
      },
    },
    profileImageUrl: {
      control: { type: 'text' },
      description: 'ユーザー画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    numberOfProducts: {
      control: { type: 'number' },
      description: 'ユーザーが所有する商品数',
      table: {
        type: { summary: 'number' },
      },
    },
    description: {
      control: { type: 'text' },
      description: 'ユーザーの説明',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<UserProfileProps>

const Template: StoryFn<UserProfileProps> = (args) => <UserProfile {...args} />

export const Small = Template.bind({})
Small.args = {
  variant: 'small',
  username: 'テストユーザー',
  profileImageUrl: '/images/sample/1.jpg',
  numberOfProducts: 2000,
  description: 'サンプルテキスト',
}

export const Normal = Template.bind({})
Normal.args = {
  variant: 'normal',
  username: 'テストユーザー',
  profileImageUrl: '/images/sample/1.jpg',
  numberOfProducts: 2000,
  description: 'サンプルテキスト',
}

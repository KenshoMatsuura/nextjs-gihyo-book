import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import Badge from './index'

// Badgeコンポーネントが受け取るプロパティの型を定義
type BadgeProps = {
  content: string
  backgroundColor: string
}

export default {
  title: 'Atoms/Badge', // ストーリーのタイトル
  component: Badge, // 対象のコンポーネント
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'バッジのテキスト',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'バッジの色',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof Badge> // Metaオブジェクトの型定義

// Template関数をStoryFn型で定義し、BadgePropsを使用
const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />

export const Orange = Template.bind({})
Orange.args = { content: '1', backgroundColor: '#ed9f28' }

export const Green = Template.bind({})
Green.args = { content: '2', backgroundColor: '#32bf00' }

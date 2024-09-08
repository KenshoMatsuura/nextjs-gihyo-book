import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import BreadcrumbItem from './index'

// BreadcrumbItemが受け取るプロパティの型を定義（プロパティがある場合）
type BreadcrumbItemProps = {
  children: React.ReactNode
}

export default {
  title: 'Atoms/BreadcrumbItem',
  component: BreadcrumbItem,
  // argTypesを指定する場合（オプション）
  argTypes: {
    children: {
      control: 'text',
      description: 'Breadcrumb item content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
} as Meta<typeof BreadcrumbItem> // BreadcrumbItemの型をMetaに指定

// TemplateをStoryFn<BreadcrumbItemProps>で型付け
const Template: StoryFn<BreadcrumbItemProps> = (args) => (
  <div>
    <BreadcrumbItem {...args}>Item 1</BreadcrumbItem>
    <BreadcrumbItem {...args}>Item 2</BreadcrumbItem>
    <BreadcrumbItem {...args}>Item 3</BreadcrumbItem>
  </div>
)

// Standardストーリーの定義
export const Standard = Template.bind({})
Standard.args = {} // 必要に応じてargsを指定

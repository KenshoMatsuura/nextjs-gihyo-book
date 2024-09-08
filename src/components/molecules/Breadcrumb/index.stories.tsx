import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import Breadcrumb from './index'
import BreadcrumbItem from 'components/atoms/BreadcrumbItem'

// Breadcrumbコンポーネントが受け取るプロパティの型を定義
interface BreadcrumbProps {
  children: React.ReactNode
}

interface BreadcrumbItemProps {
  children: React.ReactNode
}

export default {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  // Breadcrumbコンポーネントのプロパティを定義
  argTypes: {
    children: {
      control: { type: 'object' },
      description: 'Breadcrumb内に配置されるアイテム',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
} as Meta<typeof Breadcrumb>

const Template: StoryFn<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem>
      <a href="#">Top</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="#">Clothes</a>
    </BreadcrumbItem>
    <BreadcrumbItem>Item</BreadcrumbItem>
  </Breadcrumb>
)

export const Standard = Template.bind({})

// Standardのargsを明示的に設定
Standard.args = {
  children: (
    <>
      <BreadcrumbItem>
        <a href="#">Top</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Clothes</a>
      </BreadcrumbItem>
      <BreadcrumbItem>Item</BreadcrumbItem>
    </>
  ),
}

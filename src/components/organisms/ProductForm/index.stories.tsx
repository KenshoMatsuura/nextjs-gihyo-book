import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import ProductForm from './index'

// ProductForm コンポーネントのプロパティの型定義
interface ProductFormProps {
  onProductSave: () => void
}

export default {
  title: 'Organisms/ProductForm',
  component: ProductForm,
  argTypes: {
    onProductSave: {
      description: '出品ボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<ProductFormProps>

const Template: StoryFn<ProductFormProps> = (args) => <ProductForm {...args} />

export const Form = Template.bind({})
Form.args = {
  onProductSave: () => {
    console.log('Product saved')
  },
}

import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import ProductCard from './index'

// ProductCard コンポーネントのプロパティ型定義
interface ProductCardProps {
  title: string
  price: number
  imageUrl: string
  blurDataUrl?: string
  variant: 'listing' | 'small' | 'detail'
}

export default {
  title: 'Organisms/ProductCard',
  component: ProductCard,
  argTypes: {
    title: {
      control: { type: 'text' },
      description: '商品名',
      table: {
        type: { summary: 'string' },
      },
    },
    price: {
      control: { type: 'number' },
      description: '商品価格',
      table: {
        type: { summary: 'number' },
      },
    },
    imageUrl: {
      control: { type: 'text' },
      description: '商品画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    blurDataUrl: {
      control: { type: 'text' },
      description: '商品のぼかし画像のデータURIスキーム',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      options: ['listing', 'small', 'detail'],
      control: { type: 'radio' },
      defaultValue: 'listing',
      description: 'バリアント（表示スタイル）',
      table: {
        type: { summary: 'listing | small | detail' },
        defaultValue: { summary: 'listing' },
      },
    },
  },
} as Meta<ProductCardProps>

const Template: StoryFn<ProductCardProps> = (args) => <ProductCard {...args} />

// Listingカード
export const Listing = Template.bind({})
Listing.args = {
  variant: 'listing',
  title: 'ナイスシューズ',
  imageUrl: '/images/sample/1.jpg',
  price: 2000,
}

// Smallカード
export const Small = Template.bind({})
Small.args = {
  variant: 'small',
  title: 'ナイスシューズ',
  imageUrl: '/images/sample/1.jpg',
  price: 2000,
}

// Detailカード
export const Detail = Template.bind({})
Detail.args = {
  variant: 'detail',
  title: 'ナイスシューズ',
  imageUrl: '/images/sample/1.jpg',
  price: 2000,
}

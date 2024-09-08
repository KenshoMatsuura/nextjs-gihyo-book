import { Meta, StoryFn } from '@storybook/react'
import React, { useState } from 'react'
import FilterGroup from './index'

// FilterGroupコンポーネントのプロパティ型定義
interface FilterGroupItem {
  label: string
  name: string
}

interface FilterGroupProps {
  title: string
  items: FilterGroupItem[]
  onChange?: (value: string[]) => void
}

export default {
  title: 'Molecules/FilterGroup',
  component: FilterGroup,
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'タイトル',
      table: {
        type: { summary: 'string' },
      },
    },
    items: {
      control: { type: 'object' }, // 修正: 'array' -> 'object'
      description: 'オプション',
      table: {
        type: { summary: 'array' },
      },
    },
    onChange: {
      description: 'onChangeイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<FilterGroupProps>

const Template: StoryFn<FilterGroupProps> = (args) => {
  const [value, setValue] = useState<string[]>([])
  const handleChange = (value: string[]) => {
    setValue(value)
    args && args.onChange && args.onChange(value)
  }

  return <FilterGroup value={value} onChange={handleChange} {...args} />
}

export const Standard = Template.bind({})
Standard.args = {
  title: 'All categories',
  items: [
    { label: 'Clothes', name: 'clothes' },
    { label: 'Books', name: 'books' },
    { label: 'Shoes', name: 'shoes' },
  ],
}

import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import BadgeIconButton from './index' // BadgeIconButtonコンポーネント
import {
  PersonIcon,
  SearchIcon,
  ShoppingCartIcon,
} from 'components/atoms/IconButton'

// BadgeIconButtonが受け取るプロパティの型を定義
interface BadgeIconButtonProps {
  icon: React.ReactNode
  badgeContent: number
  badgeBackgroundColor: string
}

export default {
  title: 'Molecules/BadgeIconButton',
  component: BadgeIconButton,
  argTypes: {
    icon: {
      control: { type: 'object' },
      description: 'アイコン',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    badgeContent: {
      control: { type: 'number' },
      description: 'バッジのカウンター',
      table: {
        type: { summary: 'number' },
      },
    },
    badgeBackgroundColor: {
      control: { type: 'color' },
      description: 'バッジの背景色',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof BadgeIconButton> // Metaに型を指定

// StoryFnに型を指定し、argsの型を明示
const Template: StoryFn<BadgeIconButtonProps> = (
  args: BadgeIconButtonProps,
) => <BadgeIconButton {...args} />

// SearchBadgeIconのストーリー
export const SearchBadgeIcon = Template.bind({})
SearchBadgeIcon.args = {
  icon: <SearchIcon size={24} />,
  badgeContent: 1,
  badgeBackgroundColor: '#ed9f28',
}

// PersonBadgeIconのストーリー
export const PersonBadgeIcon = Template.bind({})
PersonBadgeIcon.args = {
  icon: <PersonIcon size={24} />,
  badgeContent: 1,
  badgeBackgroundColor: '#d4001a',
}

// ShoppingCartBadgeIconのストーリー
export const ShoppingCartBadgeIcon = Template.bind({})
ShoppingCartBadgeIcon.args = {
  icon: <ShoppingCartIcon size={24} />,
  badgeContent: 1,
  badgeBackgroundColor: '#32bf00',
}

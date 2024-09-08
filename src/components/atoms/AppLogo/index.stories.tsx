import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import AppLogo from './index' // AppLogoコンポーネントをインポート

// AppLogoがプロパティを受け取らない場合の型定義
export default {
  title: 'Atoms/AppLogo',
  component: AppLogo,
} as Meta

// StoryFnでテンプレートを型付け
const Template: StoryFn = () => <AppLogo />

export const Logo = Template.bind({})
Logo.args = {} // プロパティがない場合は空のオブジェクトでOK

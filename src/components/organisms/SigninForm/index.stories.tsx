import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import SigninForm from './index'

// SigninForm のプロパティの型定義
interface SigninFormProps {
  onSignin: () => void
}

export default {
  title: 'Organisms/SigninForm',
  component: SigninForm,
  argTypes: {
    onSignin: {
      description: 'サインインボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<SigninFormProps>

const Template: StoryFn<SigninFormProps> = (args) => <SigninForm {...args} />

export const Form = Template.bind({})
Form.args = {
  onSignin: () => {
    console.log('Sign in clicked')
  },
}

import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import Separator from './index'

export default {
  title: 'Atoms/Separator',
  component: Separator, // コンポーネントを明示的に指定
} as Meta<typeof Separator>

export const Standard: StoryFn = () => (
  <>
    <Separator>or</Separator>
    <Separator>and</Separator>
    <Separator />
  </>
)

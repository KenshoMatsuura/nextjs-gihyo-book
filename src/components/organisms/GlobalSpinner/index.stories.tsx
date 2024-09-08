import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import GlobalSpinnerContextProvider, {
  useGlobalSpinnerActionsContext,
} from '../../contexts/GlobalSpinnerContext'
import GlobalSpinner from './index'
import Button from 'components/atoms/Button'

export default {
  title: 'Organisms/GlobalSpinner',
  component: GlobalSpinner,
} as Meta<Record<string, never>> // 修正: {} を Record<string, never> に置き換え

const Template: StoryFn<Record<string, never>> = () => {
  // 修正: {} を Record<string, never> に置き換え
  const ChildComponent = () => {
    const setGlobalSpinner = useGlobalSpinnerActionsContext()
    const handleClick = () => {
      setGlobalSpinner(true)
      // 5秒後に閉じる
      setTimeout(() => {
        setGlobalSpinner(false)
      }, 5000)
    }

    return (
      <>
        <GlobalSpinner />
        <Button onClick={handleClick}>スピナー表示</Button>
      </>
    )
  }

  return (
    <GlobalSpinnerContextProvider>
      <ChildComponent />
    </GlobalSpinnerContextProvider>
  )
}

export const WithContextProvider = Template.bind({})

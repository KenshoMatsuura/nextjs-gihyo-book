import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import Footer from './'

export default {
  title: 'Organisms/Footer',
  component: Footer,
} as Meta<typeof Footer>

const Template: StoryFn<typeof Footer> = () => <Footer />

export const Standard = Template.bind({})

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Footer from './Footer'

export default {
  title: 'Molecules/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer />
export const Normal = Template.bind({})

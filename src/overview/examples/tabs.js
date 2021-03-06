import React from 'react'

import Section from '../ov-components/section'
import Example from '../ov-components/example'
import { Tabs } from '../../components'

const TabsExample = () => (
  <Section>
    <Example title="Tabs">
      <Tabs>
        <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
        <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
        <Tabs.Tab label="Tab 3">Third tab's the charm!</Tabs.Tab>
      </Tabs>
    </Example>
  </Section>
)

export default TabsExample

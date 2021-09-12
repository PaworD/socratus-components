import { Meta, Story} from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import { STabs } from './index'
import { STab, Tab} from './_'


const methods = {
    onclick: action('onClick')
}

const meta: Meta = {
    title: 'Components/Tabs',
    component: STabs,
    argTypes: {}
}

export default meta

const defaultArgs = {
    title: 'Tab Title'
}


const TemplateDefault: Story<STabs> = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { STabs, STab },
    template: `
      <div>
        <STabs>
          <STab title="Tab 1">
            Hello From Tab 1
          </STab>
          <STab title="Tab 2">
            Hello From Tab 2
          </STab>
          <STab title="Tab 3">
            Hello From Tab 3
          </STab>
        </STabs>
      </div>
  `,
    methods: methods,
})

export const TabsSimple = TemplateDefault.bind({})
TabsSimple.args = defaultArgs


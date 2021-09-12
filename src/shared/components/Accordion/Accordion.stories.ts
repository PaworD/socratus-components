import { Meta, Story} from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import {SAccordion, AccordionType, AccordionProps} from './index'


const methods = {
    onclick: action('onClick')
}

const meta: Meta = {
    title: 'Components/Accordion',
    component: SAccordion,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: AccordionType
            }
        }
    }
}

export default meta

const defaultArgs = {
    type: AccordionType.Simple,
}


const TemplateDefault: Story<AccordionProps> = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {SAccordion},
    template: `
      <div>
      <SAccordion v-bind="$props">
        <template slot="header">
          Accordion Title
        </template>
        <template slot="default">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi corporis doloribus dolorum expedita hic iste iusto laboriosam minus molestiae quaerat quas, quia, quidem quisquam quo sint suscipit ut voluptatum.
        </template>
      </SAccordion>
      <SAccordion v-bind="$props">
        <template slot="header">
          Accordion Title
        </template>
        <template slot="default">
          Some text
        </template>
      </SAccordion>
      <SAccordion v-bind="$props">
        <template slot="header">
          Accordion Title
        </template>
        <template slot="default">
          Some text
        </template>
      </SAccordion>
      </div>
  `,
    methods: methods,
})

export const AccordionSimple = TemplateDefault.bind({})
AccordionSimple.args = defaultArgs


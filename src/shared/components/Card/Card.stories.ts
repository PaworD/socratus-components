import { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import { SCard, Card, CardTheme} from './index'


const methods = {
    onclick: action('onClick')
}

const meta: Meta = {
    title: 'Components/Card',
    component: SCard,
    argTypes: {
        theme: {
            control: {
                type: 'select',
                options: CardTheme
            }
        }
    }
}

export default meta

const defaultArgs = {
    theme: CardTheme.Default
}


const TemplateDefault: Story<Card> = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {SCard},
    template: `
    <SCard v-bind="$props">
      <template slot="header">
       Header
      </template>
      <template slot="body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium dignissimos dolorem doloremque dolorum ducimus eaque excepturi fugit ipsum minima nihil nulla odio, officia omnis provident quam quibusdam sequi tenetur.</p>
      </template>
    </SCard>
  `,
    methods: methods,
})

export const CardSimple = TemplateDefault.bind({})
CardSimple.args = defaultArgs


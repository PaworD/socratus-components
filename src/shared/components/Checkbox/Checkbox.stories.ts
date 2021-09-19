import { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import { SCheck, CheckboxProps} from './index'


const methods = {
    onclick: action('onClick')
}

const meta: Meta = {
    title: 'Components/Checkbox',
    component: SCheck,
    argTypes: {}
}

export default meta

const defaultArgs = {
   value: false,
   id: 'name'
}


const TemplateDefault: Story<CheckboxProps> = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {SCheck},
    template: `<SCheck v-bind="$props"> Label for Check</SCheck>
  `,
    methods: methods,
})

export const CheckboxSimple = TemplateDefault.bind({})
CheckboxSimple.args = defaultArgs


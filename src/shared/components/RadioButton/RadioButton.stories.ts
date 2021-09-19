import { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import { SRadio, RadioButtonProps} from './index'


const methods = {
    onclick: action('onClick')
}

const meta: Meta = {
    title: 'Components/Radio',
    component: SRadio,
    argTypes: {}
}

export default meta

const defaultArgs = {
    label: 'HTML',
    value: '1',
    model: 'name'
}


const TemplateDefault: Story<RadioButtonProps> = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {SRadio},
    template: `
    <div style="width: 100px">
        <SRadio label="Hello"  model="name" value="0" @changed="change"/>
        <SRadio label="Darling" model="name" value="1"  @changed="change"/>
    </div>
  `,
    methods: {
        change(val: string) {
            console.log(val)
        }
    },
})

export const RadioSimple = TemplateDefault.bind({})
RadioSimple.args = defaultArgs


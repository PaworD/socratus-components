import { Meta, Story} from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import { SDropdownItem, DropdownItemProps } from './index'


const methods = {
    onclick: action('onClick')
}

const meta: Meta = {
    title: 'Components/Dropdown/Item',
    component: SDropdownItem,
}

export default meta

const defaultArgs = {
    label: 'Dropdown Item',
}


const TemplateDefault: Story<DropdownItemProps> = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {SDropdownItem},
    template: `
      <SDropdownItem v-bind="$props">
      <template v-slot:icon>
        H
      </template>
      </SDropdownItem>
  `,
    methods: methods,
})

export const DropdownItem = TemplateDefault.bind({})
DropdownItem.args = defaultArgs


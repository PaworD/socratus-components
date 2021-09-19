import { Meta, Story} from '@storybook/vue'
import { SDropdown, DropdownType, DropdownProps } from './index'

const meta: Meta = {
    title: 'Components/Dropdown/List',
    component: SDropdown,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: DropdownType
            }
        },
        list: {
            control: {
                type: 'array',
                options: [{label: 'Item 1'}, {label: 'Item 2'}, {label: 'Item 3'}]
            }
        }
    }
}

export default meta

const defaultArgs = {
    list: [{label: 'Item 1', value: 'item_value'}, {label: 'Item 2', value: 'item_value'}, {label: 'Item 3', value: 'item_value'} ],
    value: 'Select option',
    type: DropdownType.SIMPLE
}


const TemplateDefault: Story<DropdownProps> = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {SDropdown},
    template: `
      <div>
      <SDropdown v-bind="$props"/>
      </div>
  `,
})

export const Dropdown = TemplateDefault.bind({})
Dropdown.args = defaultArgs


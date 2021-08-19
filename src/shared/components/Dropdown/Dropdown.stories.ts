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
                options: ['Item 1', 'Item 2', 'Item 3']
            }
        }
    }
}

export default meta

const defaultArgs = {
    list: ['Item 1', 'Item 2', 'Item 3'],
    value: 'Select option',
    type: DropdownType.SIMPLE
}


const TemplateDefault: Story<DropdownProps> = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {SDropdown},
    template: `
    <SDropdown v-bind="$props"/>
  `,
})

export const Dropdown = TemplateDefault.bind({})
Dropdown.args = defaultArgs


import { Meta, Story} from '@storybook/vue'
import { SDropdown, DropdownType, DropdownProps } from './index'
import { SButton , ButtonSize } from '../Button'

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
    list: [{label: 'Item 1'}, {label: 'Item 2'}, {label: 'Item 3'} ],
    value: 'Select option',
    type: DropdownType.SIMPLE
}


const TemplateDefault: Story<DropdownProps> = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {SDropdown, SButton},
    template: `
      <div>
      <SDropdown v-bind="$props"/>
      <SButton v-ripple flat label="Button"/>
      </div>
  `,
})

export const Dropdown = TemplateDefault.bind({})
Dropdown.args = defaultArgs


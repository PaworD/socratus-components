import { Meta, Story} from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import { SButton, ButtonProps, ButtonSize, ButtonTheme } from './index'


const methods = {
  onclick: action('onClick')
}

const meta: Meta = {
  title: 'Components/Button',
  component: SButton,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ButtonSize
      }
    },
    theme: {
      control: {
        type: 'select',
        options: ButtonTheme
      }
    }
  }
}

export default meta

const defaultArgs = {
  label: 'Button',
  size: ButtonSize.NORMAL,
  flat: false,
  theme: ButtonTheme.PRIMARY
}


const TemplateDefault: Story<ButtonProps> = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {SButton},
  template: `
    <SButton v-bind="$props"/>
  `,
  methods: methods,
})

export const ButtonDefault = TemplateDefault.bind({})
ButtonDefault.args = defaultArgs


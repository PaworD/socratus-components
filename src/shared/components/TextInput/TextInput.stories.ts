import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import STextInput from './TextInput.vue'


export const methods = {
  onclick: action('onClick')
}

storiesOf('STextInput', module)
  .add('Normal', () => ({
    components: {STextInput},
    template: `<STextInput placeholder="Your placeholder" :size="size"/>`,
    data: () => ({size: 'normal'}),
    methods
  }))
  .add('Medium', () => ({
    components: {STextInput},
    template: `<STextInput placeholder="Your placeholder" :size="size"/>`,
    data: () => ({size: 'medium'}),
    methods
  }))
  .add('Small', () => ({
    components: {STextInput},
    template: `<STextInput placeholder="Your placeholder" :size="size"/>`,
    data: () => ({size: 'small'}),
    methods
  }))
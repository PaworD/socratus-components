<template>
  <div class="home">
    <SButton v-ripple flat label="Button" :size="size"/>
    <STextInput placeholder="Your placeholder" :size="size" v-model="name"/>
    <span>{{name}}</span>
    <SDropdown :list="list" value="Please chose value" @on-select="select" />
    <SCheck v-model="value" id="name">
      Label
    </SCheck>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import { SButton } from '@/shared/components/Button/Button.vue'
import { SDropdown } from '@/shared/components/Dropdown/Dropdown.vue'
import { SCheck } from '@/shared/components/Checkbox/Checkbox.vue'
import { STextInput } from '@/shared/components/TextInput/TextInput.vue'
import{ ButtonSize } from '../shared/components/Button/Button.contracts'

@Component({name: 'Home', components: {SButton, STextInput, SDropdown, SCheck}})
export default class Home extends Vue {

  public size: ButtonSize = ButtonSize.MEDIUM

  public value = false

  public name=  'Hello'

  public list = [{label: 'Item 1', value: 'item_value'}, {label: 'Item 2', value: 'item_value'}, {label: 'Item 3', value: 'item_value'} ]

  public select (value: string): void {
    console.log(value)
  }

  @Watch('value')
  onValueChange(val: boolean) {
    console.log(val)
  }
}
</script>

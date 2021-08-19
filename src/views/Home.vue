<template>
  <div class="home">
    <SButton v-ripple flat label="Button" :size="size"/>
    <STextInput placeholder="Your placeholder" :size="size"/>
    <SDropdown :list="['Hello', 'World']" value="Please chose value" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SButton } from '@/shared/components/Button/Button.vue'
import { SDropdown } from '@/shared/components/Dropdown/Dropdown.vue'
import { STextInput } from '@/shared/components/TextInput/TextInput.vue'
import{ButtonSize} from '../shared/components/Button/Button.contracts'

@Component({name: 'Home', components: {SButton, STextInput, SDropdown}})
export default class Home extends Vue {

  public size: ButtonSize = ButtonSize.MEDIUM
}
</script>

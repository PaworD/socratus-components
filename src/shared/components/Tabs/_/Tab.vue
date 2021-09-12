<template>
  <div v-show='isActive'>
    <slot></slot>
  </div>
</template>

<script lang="ts">

import { Vue , Component, Prop } from "vue-property-decorator";

@Component({
  name: 'STab'
})
export class STab extends Vue {
  @Prop({type: String, required: true})
  public readonly title!: string

  @Prop({type: Boolean, required: true})
  public readonly isActive!: boolean

}
export default STab
</script>
<template>
  <li v-bind="$attrs" @click="onClick">
    <slot name="icon" class="dropdown-item-leading"></slot>
    {{ label }}
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component<SDropdownItem>({
  name: 'SDropdownItem',

  mounted (): void {
   console.log(this.$attrs)
  }

})
export class SDropdownItem extends Vue {
  @Prop({type: String, required: true})
  private readonly label!: string

  public onClick (): void {
    this.$emit('click')
  }
}
export default SDropdownItem
</script>

<style scoped lang="scss">

  li{
    list-style: none;
    padding: 12px;
    color: #666;
    color: #666;
    cursor: pointer;

  &:hover {
     background-color: darken(#f1f1f1, 1%);
   }
  }

  .dropdown-item-leading {
    width: 2rem;
    height: 2rem;
    background: #00abdf;
  }
</style>
<template>
  <button
  @click="onClick"
  :class="[ 'button ', `button--${theme}`, `button--${size}`, { 'button--flat' : flat }]"
  >{{label}}</button>  
</template>

<script lang="ts">
// Socratus Core 2021

import { Vue, Component, Prop } from "vue-property-decorator";

import { ButtonSize, ButtonTheme } from './Button.contracts'

/**
 * @author Javlon Khalimjonov <khalimajonov.code@gmail.com>
 */
@Component({ name: 'SButton' })
export class SButton extends Vue {
  @Prop({type: String, required: true, default: {}})
  private readonly label!: string

  @Prop({type: Boolean, required: false, default: false})
  private readonly flat!: boolean

  @Prop({type: String, required: false, default: ButtonTheme.PRIMARY})
  private readonly theme!: string

  @Prop({type: String, required: false, default: ButtonSize.NORMAL})
  private readonly size!: ButtonSize

  public onClick(): void {
    this.$emit('onClick', true)
  }
}
export default SButton
</script>

<style lang="scss">
  .button {
    position: relative;
    border: none;
    color: #fff;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    outline: 0;

    &--flat {
      box-shadow: none;
    }

    //Types
    &--primary {
      background: #00abdf;
    }

    &--secondary {
      background: #0047df;
    }

    //Sizes
    &--normal {
      padding: 1rem;
    }

    &--medium {
      padding: 0.6rem;
    }

    &--small {
      padding: 0.4rem;
    }
  }
</style>
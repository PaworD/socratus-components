<template>
  <div class="select" :data-value="value" :data-list="list">
    <div class="select--selector" @click="toggle">
      <div class="select--selector--label">
        <span>{{ value }}</span>
      </div>
      <div :class="['select--selector--arrow', { 'select--selector--expanded' : visible }]"></div>
      <div :class="{'hidden' : !visible, visible}">
        <ul>
          <li :class="{'current' : item === value}" v-for="item in list" :key="item['id']" @click="selectItem(item)">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({name: 'SDropdown'})
export class SDropdown extends Vue {
  @Prop({type: Array, required: true })
  private readonly list!: []

  @Prop({type: String, required: true })
  private value!: string

  public visible: boolean | null = false

  public toggle(): void {
    this.visible = !this.visible
  }

  public selectItem(item: any): void {
    this.value = item
  }
}

export default SDropdown
</script>

<style scoped>

</style>
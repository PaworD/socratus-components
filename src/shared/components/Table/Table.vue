<template>
  <table class="table">
    <thead>
    <tr>
      <th v-for="column in _columns" :key="column">
          {{column}}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="row in _rows" :key="row['id']">
      <td v-for="column in _columns" :key="column">
        <span v-if="typeof row[column] !== 'string' && typeof row[column] !== 'number'">
        <div v-for="action in row.actions" :key="action">
          <component :is="action.component" />
        </div>
        </span>
        <span v-else>
          {{row[column]}}
        </span>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { TableRowItem } from "../Table/_";

@Component({name: 'STable'})
export class STable extends Vue {
  @Prop({type: Array, required: true})
  private readonly rows!: TableRowItem[]

  public get _rows (): TableRowItem[] {
    return this.rows
  }

  public get _columns (): string[] {
    if(this._rows.length == 0) {
      return []
    }

    return Object.keys(this._rows[0])
  }

  public get hasAction (): boolean {
    return this._rows[0].actions !== []
  }
}
export default STable
</script>

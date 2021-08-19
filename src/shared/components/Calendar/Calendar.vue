<template>
  <div class="calendar-month">
    <div class="calendar-month-header">
      <CalendarDateIndicator />
      <CalendarDateSelector />
    </div>
    <CalendarWeekdays />
    <ol class="days-grid">
      <CalendarMonthDayItem />
    </ol>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";

@Component({name: 'SCalendar'})
export class SCalendar extends Vue {
  @Prop({type: Array, required: false})
  private readonly events!: []
}
</script>

<style>

</style>
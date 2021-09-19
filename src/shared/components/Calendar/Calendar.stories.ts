import { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import { SCalendar, Calendar } from './index'
import moment from "moment";


const methods = {
    onclick: action('onClick')
}

const meta: Meta = {
    title: 'Components/Calendar',
    component: SCalendar,
    argTypes: {}
    }

export default meta

const defaultArgs = {
    events: [
        {
            id: 'efc-0',
            title: 'Event 1',
            date: moment().format('DD.MM.YYYY')
        },
        {
            id: 'efc-1',
            title: 'Event 2',
            date: moment().format('DD.MM.YYYY')
        },
        {
            id: 'efc-01',
            title: 'Event 1',
            date: moment().days(11).format('DD.MM.YYYY')
        }
    ],
    controllers: true
}


const TemplateDefault: Story<Calendar> = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { SCalendar },
    template: `<SCalendar v-bind="$props"/>
  `,
    methods: methods,
})

export const CalendarSimple = TemplateDefault.bind({})
CalendarSimple.args = defaultArgs


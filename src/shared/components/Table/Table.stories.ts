import { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import { STable, TableProps} from './index'
import {TableRowItem} from "@/shared/components/Table/_";
import {SButton} from "@/shared/components/Button";


const methods = {
    onclick: action('onClick')
}

const meta: Meta = {
    title: 'Components/Table',
    component: STable,
    argTypes: {}
}

export default meta

const defaultArgs = {
    rows: [
        {id: 1, name: 'John', phone: '+99898989898', role: 'Admin', actions: [{
            component: SButton
            }] },
        {id: 2, name: 'Doe', phone: '+99898989898', role: 'User'}
    ] as TableRowItem[]
}


const TemplateDefault: Story<TableProps> = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {STable},
    template: `
    <STable v-bind="$props"/>
  `,
    methods: methods,
})

export const TableSimple = TemplateDefault.bind({})
TableSimple.args = defaultArgs


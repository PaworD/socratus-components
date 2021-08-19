export enum DropdownType {
    SIMPLE = 'simple',
    NESTED = 'nested'
}

export interface DropdownProps {
    list: string[];
    type: DropdownType
    value: string;
}
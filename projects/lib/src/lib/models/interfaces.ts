import { SizeBtn, TypeAlert, TypeBtn } from './enums';

export interface IDropDownItem {
  name: string;
  text: string;
}

export interface IDropDown {
  label: string;
  dropDownList: IDropDownItem[];
  typeBtn: TypeBtn;
  sizeBtn: SizeBtn;
}

export interface IAccordionItem {
  index: number;
  open: boolean;
}

export interface IAlertSystem {
  type: TypeAlert;
  text: string;
  createDate: Date;
  duration: number;
}

export interface ISelectMultiple {
  value: string;
  text: string;
  checked: boolean;
}

export interface IBoxItem {
  value: string;
  text: string;
}

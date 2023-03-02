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

export interface IAccordion {
  title: string;
  description: string;
  open: boolean;
}

export interface IAlertSystem {
  type: TypeAlert;
  text: string;
  createDate?: Date;
}
